import { ObjectLiteral, SelectQueryBuilder } from 'typeorm';
import { PaginationQueryDto } from './pagination-query.dto';
import { FieldMetaMap } from './field-meta.type';
import { PaginationResult } from './pagination-result.interface';
import { AppConfig } from '@common/config/app.config';
import { formatQuery } from 'src/utils/query.util';

export async function paginate<T extends ObjectLiteral>(
    qb: SelectQueryBuilder<T>,
    query: PaginationQueryDto,
    fields: FieldMetaMap,
): Promise<any> {
    let {
        page = 1,
        limit = 10,
        search,
        sortBy = 'createdAt',
        sortDir = 'desc',
    } = query;

    /* ================= SEARCH ================= */
    if (search) {
        const searchables = Object.values(fields)
            .filter((f) => f.searchable)
            .map((f) => `${f.column} LIKE :search`);

        if (searchables.length) {
            qb.andWhere(`(${searchables.join(' OR ')})`, {
                search: `%${search}%`,
            });
        }
        page = 1;
    }

    /* ================= ORDER ================= */
    if (sortBy && fields[sortBy]?.orderable) {
        qb.orderBy(fields[sortBy].column, sortDir.toUpperCase() as any);
    }

    /* ================= PAGINATION ================= */
    qb.skip((page - 1) * limit).take(limit);

    const [data, total] = await qb.getManyAndCount();
    let sql = null;
    if (AppConfig.APP_DEBUG) {
        sql = formatQuery(qb);
    }

    return {
        data,
        meta: {
            page,
            limit,
            total,
            totalPage: Math.ceil(total / limit),
            sortBy,
            sortDir,
            search,
            ...(sql ? { sql } : {}),
        },
    };
}
