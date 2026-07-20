export enum OtpPurpose {
    SIGNUP = 'SIGNUP',
    SIGNIN = 'SIGNIN',
    FORGOT_PASSWORD = 'FORGOT_PASSWORD',
    CHANGE_PASSWORD = 'CHANGE_PASSWORD',
    VENDOR_USER_ACCESS = 'VENDOR_USER_ACCESS',
}

export enum OtpStatus {
    PENDING = 'PENDING',
    VERIFIED = 'VERIFIED',
    USED = 'USED',
    EXPIRED = 'EXPIRED',
    FAILED = 'FAILED',
    LOCKED = 'LOCKED',
}

export enum OtpChannel {
    SMS = 'SMS',
    EMAIL = 'EMAIL',
    WHATSAPP = 'WHATSAPP',
}