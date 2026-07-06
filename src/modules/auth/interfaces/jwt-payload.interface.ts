export interface JwtPayload {
    sub: number;
    username: string;
    type: string;
    vendorId: number | null;
    defaultRoleId: number;
    iat?: number;
    exp?: number;
}
