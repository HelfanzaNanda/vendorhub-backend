export class PhoneValidator {

    /**
     * Remove all non numeric characters.
     * Example:
     * +62 812-3456-7890 -> 6281234567890
     */
    static normalize(phone: string): string {
        return phone.replace(/\D/g, '');
    }

    /**
     * Convert to local format.
     * 62812xxxx -> 0812xxxx
     */
    static toLocal(phone: string): string {
        const normalized = this.normalize(phone);

        if (normalized.startsWith('62')) {
            return '0' + normalized.substring(2);
        }

        return normalized;
    }

    /**
     * Convert to international format.
     * 0812xxxx -> 62812xxxx
     */
    static toInternational(phone: string): string {
        const normalized = this.normalize(phone);

        if (normalized.startsWith('0')) {
            return '62' + normalized.substring(1);
        }

        return normalized;
    }

    static getPrefix(phone: string): string {

        const local = this.toLocal(phone);

        return local.substring(0, 4);

    }

}