import {
    BadRequestException,
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { CreateVendorTermConditionDto, ChapterReviewDto } from './dto/create-vendor-term-condition.dto';
import { DataSource } from 'typeorm';
import { VendorTermCondition } from './entities/vendor-term-condition.entity';
import { VendorTermConditionReview, ReviewStatus } from './entities/vendor-term-condition-review.entity';
import { TermsCondition } from '@modules/master/terms-condition/entities/term-condition.entity';
import { File } from '@modules/master/file/entities/file.entity';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class VendorTermConditionService {
    constructor(private dataSource: DataSource) {}

    async findOneByVendorId(vendorId: number) {
        return this.dataSource.transaction(async (manager) => {
            const vendorTermCondition = await manager.findOne(VendorTermCondition, {
                where: { vendorId: vendorId },
                relations: [
                    'supportingDocument',
                    'signedDocument',
                    'chapterReviews',
                    'termsCondition',
                    'termsCondition.items',
                ],
            });

            let masterTerms: TermsCondition | null = null;
            if (vendorTermCondition && vendorTermCondition.termsCondition) {
                masterTerms = vendorTermCondition.termsCondition;
            } else {
                masterTerms = await manager.findOne(TermsCondition, {
                    where: { status: true },
                    order: { createdAt: 'DESC' },
                    relations: ['items'],
                });
            }

            if (!masterTerms) {
                throw new NotFoundException('No active Terms & Conditions found.');
            }

            const formattedTermsCondition = {
                id: masterTerms.id,
                version: masterTerms.version,
                effectiveDate: masterTerms.createdAt?.toISOString() || null,
                title: masterTerms.title,
                description: null,
                chapters: (masterTerms.items || [])
                    .map((item) => ({
                        id: item.id,
                        title: item.title,
                        content: item.content,
                        orderNo: item.sortOrder,
                    }))
                    .sort((a, b) => a.orderNo - b.orderNo),
            };

            let formattedSubmission = null;
            if (vendorTermCondition) {
                const chapterReviews: Record<string, any> = {};
                if (vendorTermCondition.chapterReviews) {
                    vendorTermCondition.chapterReviews.forEach((review) => {
                        chapterReviews[review.chapterId.toString()] = {
                            status: review.status,
                            reason: review.reason || null,
                        };
                    });
                }

                formattedSubmission = {
                    vendorName: vendorTermCondition.vendorName,
                    authorizedSignatory: vendorTermCondition.authorizedSignatory,
                    position: vendorTermCondition.position,
                    supportingDocument: vendorTermCondition.supportingDocument
                        ? {
                              id: vendorTermCondition.supportingDocument.id,
                              filename: vendorTermCondition.supportingDocument.originalFileName,
                          }
                        : null,
                    signedDocument: vendorTermCondition.signedDocument
                        ? {
                              id: vendorTermCondition.signedDocument.id,
                              filename: vendorTermCondition.signedDocument.originalFileName,
                          }
                        : null,
                    chapterReviews,
                };
            }

            return {
                termsCondition: formattedTermsCondition,
                submission: formattedSubmission,
            };
        });
    }

    async create(data: CreateVendorTermConditionDto, vendorId: number) {
        return this.dataSource.transaction(async (manager) => {
            // Check files
            const supportingDoc = await manager.findOne(File, {
                where: { id: data.supportingDocumentId.id },
            });
            if (!supportingDoc) {
                throw new NotFoundException('Supporting document not found');
            }

            const signedDoc = await manager.findOne(File, {
                where: { id: data.signedDocumentId.id },
            });
            if (!signedDoc) {
                throw new NotFoundException('Signed document not found');
            }

            const masterTerms = await manager.findOne(TermsCondition, {
                where: { id: data.termsConditionId.id },
            });
            if (!masterTerms) {
                throw new NotFoundException('Master Terms & Conditions not found');
            }

            // Save parent
            const termCondition = manager.create(VendorTermCondition, {
                vendorId: vendorId,
                termsConditionId: masterTerms.id,
                vendorName: data.vendorName,
                authorizedSignatory: data.authorizedSignatory,
                position: data.position,
                supportingDocumentId: data.supportingDocumentId.id,
                signedDocumentId: data.signedDocumentId.id,
            });
            const savedTermCondition = await manager.save(
                VendorTermCondition,
                termCondition,
            );

            // Validate and Save reviews
            for (const [chapterIdStr, reviewData] of Object.entries(
                data.chapterReviews,
            )) {
                const chapterId = parseInt(chapterIdStr, 10);
                if (isNaN(chapterId)) {
                    throw new BadRequestException(
                        `Invalid chapter ID: ${chapterIdStr}`,
                    );
                }

                const reviewDto = plainToInstance(ChapterReviewDto, reviewData);
                const errors = await validate(reviewDto);
                if (errors.length > 0) {
                    throw new BadRequestException(
                        `Validation failed for chapter ${chapterIdStr}: ${errors
                            .map((e) => Object.values(e.constraints || {}).join(', '))
                            .join('; ')}`,
                    );
                }

                if (reviewDto.status === ReviewStatus.REJECTED && !reviewDto.reason) {
                    throw new BadRequestException(
                        `Reason is required when status is REJECTED for chapter ${chapterId}`,
                    );
                }

                const review = manager.create(VendorTermConditionReview, {
                    vendorTermConditionId: savedTermCondition.id,
                    chapterId: chapterId,
                    status: reviewDto.status,
                    reason: reviewDto.reason,
                });
                await manager.save(VendorTermConditionReview, review);
            }

            return savedTermCondition;
        });
    }
}
