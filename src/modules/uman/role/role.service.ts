import { Injectable, NotFoundException } from '@nestjs/common';
import { IsNull, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from '@common/pagination/pagination.helper';
import { PaginationQueryDto } from '@common/pagination/pagination-query.dto';
import { RequestContext } from '@common/context/request-context';
import { LookupMapper } from '@modules/lookup/mapper/lookup.mapper';
import { SITE_FIELDS } from './query/site-field.meta';
import { Role } from './entities/role.entity';
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleMapper } from './mapper/role.mapper';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(Role)
        private roleRepo: Repository<Role>,
    ) {}

    async create(data: CreateRoleDto) {
        return this.roleRepo.save(this.roleRepo.create(data));
    }

    async pagination(query: PaginationQueryDto) {
        const qb = this.roleRepo.createQueryBuilder('c');
        qb.leftJoinAndSelect('c.createdByUser', 'createdByUser');
        qb.leftJoinAndSelect('c.updatedByUser', 'updatedByUser');

        const selectColumns = Object.values(SITE_FIELDS).map((f) => f.column);
        qb.select(selectColumns);
        const result = await paginate(qb, query, SITE_FIELDS);
        return {
            data: RoleMapper.toResponses(result.data),
            meta: result.meta,
        };
    }

    async findOne(id: number) {
        const site = await this.roleRepo.findOne({
            select: {
                createdByUser: {
                    username: true,
                },
                updatedByUser: {
                    username: true,
                },
            },
            where: { id },
            relations: {
                createdByUser: true,
                updatedByUser: true,
            },
        });
        if (!site) throw new NotFoundException();
        return RoleMapper.toResponse(site);
    }

    async update(id: number, data: UpdateRoleDto) {
        const site = await this.roleRepo.findOne({ where: { id } });
        if (!site) throw new NotFoundException(`Data with id ${id} not found`);
        Object.assign(site, data);
        return this.roleRepo.save(site);
    }

    async delete(id: number) {
        const site = await this.roleRepo.findOne({ where: { id } });
        if (!site) throw new NotFoundException(`Data with id ${id} not found`);

        const userId = RequestContext.userId;
        site.deletedBy = userId;
        site.deletedAt = new Date();

        return this.roleRepo.save(site);
    }

    async findOptions(type: 'INTERNAL' | 'EXTERNAL') {
        const role = await this.roleRepo.find({where: {type}});
        return LookupMapper.toResponses(
            role,
            (role) => role.id,
            (role) => role.name,
        );
    }
}
