import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateIdentityTypeDto } from './dto/create-identity-type.dto';
import { UpdateIdentityTypeDto } from './dto/update-identity-type.dto';
import { Repository } from 'typeorm';
import { IdentityType } from './entities/identity-type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { IDENTITY_TYPE_FIELDS } from './query/identity-type-field.meta';
import { RequestContext } from '@common/context/request-context';
import { IdentityTypeMapper } from './mapper/identity-type.mapper';

@Injectable()
export class IdentityTypeService {
    constructor(
        @InjectRepository(IdentityType)
        private identityTypeRepo: Repository<IdentityType>
    ) { }

    async create(data: CreateIdentityTypeDto) {
        return this.identityTypeRepo.save(this.identityTypeRepo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.identityTypeRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');

        const selectColumns = Object.values(IDENTITY_TYPE_FIELDS).map(f => f.column);
        qb.select(selectColumns);
        const result = await paginate(qb, query, IDENTITY_TYPE_FIELDS);
        return {
            data: IdentityTypeMapper.toResponses(result.data),
            meta: result.meta
        };

    }

    async findOne(id: number) {
        const identityType = await this.identityTypeRepo.findOne({
            select: {
                createdByUser: {
                    username: true,
                },
                updatedByUser: {
                    username: true
                }
            },
            where: { id },
            relations: {
                createdByUser: true,
                updatedByUser: true
            }
        });
        if (!identityType) throw new NotFoundException();
        return IdentityTypeMapper.toResponse(identityType);
    }

    async update(id: number, data: UpdateIdentityTypeDto) {
        const identityType = await this.identityTypeRepo.findOne({ where: { id } });
        if (!identityType) throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(identityType, data);
        return this.identityTypeRepo.save(identityType);
    }

    async delete(id: number) {
        const identityType = await this.identityTypeRepo.findOne({ where: { id } });
        if (!identityType) throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        identityType.deletedBy = userId;
        identityType.deletedAt = new Date();

        return this.identityTypeRepo.save(identityType);
    }
}
