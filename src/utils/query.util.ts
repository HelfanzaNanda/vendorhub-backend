import { SelectQueryBuilder } from 'typeorm';

export function formatQuery(qb: SelectQueryBuilder<any>): string {
    let sql = qb.getQuery();
    const params = qb.getParameters();
    Object.entries(params).forEach(([key, value]) => {
        const val = typeof value === 'string' ? `'${value}'` : value;
        sql = sql.replace(new RegExp(':' + key + '\\b', 'g'), val as any);
    });
    return sql;
}
