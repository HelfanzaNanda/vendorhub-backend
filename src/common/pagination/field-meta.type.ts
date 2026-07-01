export type FieldMeta = {
    column: string;          // alias.column (qb)
    searchable?: boolean;
    orderable?: boolean;
};

export type FieldMetaMap = Record<string, FieldMeta>;
