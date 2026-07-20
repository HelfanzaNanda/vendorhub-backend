export enum NotificationChannel {
    EMAIL = 'EMAIL',
    SMS = 'SMS',
    PUSH = 'PUSH',
    BELL = 'BELL',
    WHATSAPP = 'WHATSAPP',
    TELEGRAM = 'TELEGRAM',

}

export enum NotificationStatus {
    PENDING = 'PENDING',
    SENT = 'SENT',
    FAILED = 'FAILED',
    CANCELLED = 'CANCELLED',
}

export enum NotificationProvider {
    SMTP = 'SMTP',
    SMS = 'SMS',
    FIREBASE = 'FIREBASE',
    TWILIO = 'TWILIO',
    WHATSAPP = 'WHATSAPP',
    TELEGRAM = 'TELEGRAM',
}

export enum NotificationCode {

    // ========================================
    // AUTH
    // ========================================
    SIGNUP_OTP = 'SIGNUP_OTP',
    SIGNIN_OTP = 'SIGNIN_OTP',
    FORGOT_PASSWORD = 'FORGOT_PASSWORD',
    CHANGE_PASSWORD = 'CHANGE_PASSWORD',

    // ========================================
    // VENDOR
    // ========================================
    VENDOR_REGISTRATION_EXTERNAL = 'VENDOR_REGISTRATION_EXTERNAL',
    VENDOR_REGISTRATION_INTERNAL = 'VENDOR_REGISTRATION_INTERNAL',
    
    VENDOR_REGISTRATION_APPROVED = 'VENDOR_REGISTRATION_APPROVED',
    VENDOR_REGISTRATION_REVISED = 'VENDOR_REGISTRATION_REVISED',
    VENDOR_REGISTRATION_REJECTED = 'VENDOR_REGISTRATION_REJECTED',

    VENDOR_UPDATED = 'VENDOR_UPDATED',
    VENDOR_ACTIVATED = 'VENDOR_ACTIVATED',
    VENDOR_INACTIVATED = 'VENDOR_INACTIVATED',
    VENDOR_BLACKLISTED = 'VENDOR_BLACKLISTED',
    VENDOR_UNBLACKLISTED = 'VENDOR_UNBLACKLISTED',

    // ========================================
    // WORKFLOW
    // ========================================
    WORKFLOW_ASSIGNED = 'WORKFLOW_ASSIGNED',
    WORKFLOW_APPROVED = 'WORKFLOW_APPROVED',
    WORKFLOW_REVISED = 'WORKFLOW_REVISED',
    WORKFLOW_REJECTED = 'WORKFLOW_REJECTED',
    WORKFLOW_DELEGATED = 'WORKFLOW_DELEGATED',
    WORKFLOW_REMINDER = 'WORKFLOW_REMINDER',

    // ========================================
    // DIGITAL SIGNATURE
    // ========================================
    DIGITAL_SIGNATURE_REQUEST = 'DIGITAL_SIGNATURE_REQUEST',
    DIGITAL_SIGNATURE_COMPLETED = 'DIGITAL_SIGNATURE_COMPLETED',
    DIGITAL_SIGNATURE_EXPIRED = 'DIGITAL_SIGNATURE_EXPIRED',

    // ========================================
    // USER ACCESS
    // ========================================
    USER_ACCESS_OTP = 'USER_ACCESS_OTP',
    USER_ACCESS_CREATED = 'USER_ACCESS_CREATED',
    USER_ACCESS_ROLE_EXPIRED = 'USER_ACCESS_ROLE_EXPIRED',

    // ========================================
    // REMINDER
    // ========================================
    DOCUMENT_EXPIRED = 'DOCUMENT_EXPIRED',
    FINANCIAL_REPORT_REMINDER = 'FINANCIAL_REPORT_REMINDER',

    // ========================================
    // SYSTEM
    // ========================================
    SYSTEM_NOTIFICATION = 'SYSTEM_NOTIFICATION',
}

