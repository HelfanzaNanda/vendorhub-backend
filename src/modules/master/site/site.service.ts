import { Injectable, NotFoundException } from '@nestjs/common';
import { IsNull, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { RequestContext } from '@common/context/request-context';
import { Site } from './entities/site.entity';
import { CreateSiteDto } from './dto/create-site.dto';
import { SiteMapper } from './mapper/site.mapper';
import { UpdateSiteDto } from './dto/update-site.dto';
import { LookupMapper } from '@modules/lookup/mapper/lookup.mapper';
import { SITE_FIELDS } from './query/site-field.meta';

@Injectable()
export class SiteService {
    constructor(
        @InjectRepository(Site)
        private siteRepo: Repository<Site>
    ) { }

    async create(data : CreateSiteDto) {
        return this.siteRepo.save(this.siteRepo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.siteRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');
        
        const selectColumns = Object.values(SITE_FIELDS).map(f => f.column);
        qb.select(selectColumns);
        const result = await paginate(qb, query, SITE_FIELDS);
        return {
            data : SiteMapper.toResponses(result.data),
            meta : result.meta
        };

    }

    async findOne(id: number) {
        const site = await this.siteRepo.findOne({ 
            select: {
                createdByUser : {
                    username: true,
                },
                updatedByUser: {
                    username : true
                }
            },
            where: { id }, 
            relations : {
                createdByUser : true, 
                updatedByUser : true 
            }
        });
        if (!site) throw new NotFoundException();
        return SiteMapper.toResponse(site);
    }

    async update(id: number, data : UpdateSiteDto) {
        const site = await this.siteRepo.findOne({ where: { id } });
        if (!site) throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(site, data);
        return this.siteRepo.save(site);
    }

    async delete(id: number) {
        const site = await this.siteRepo.findOne({ where: { id } });
        if (!site) throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        site.deletedBy = userId;
        site.deletedAt = new Date();

        return this.siteRepo.save(site);
    }

    async findOptions(areaId : number) {
        const sites = await this.siteRepo.find({
            where : {
                area : {
                    id : areaId
                }
            }
        });
        return LookupMapper.toResponses(
            sites, 
            site => site.id,
            site => site.name
        );
    }
}