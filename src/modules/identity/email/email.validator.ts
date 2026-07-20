export class EmailValidator {

    static normalize(email: string): string {
        return email.trim().toLowerCase();
    }

    static getDomain(email: string): string {
        return this.normalize(email).split('@')[1] ?? '';
    }

    static getUsername(email: string): string {
        return this.normalize(email).split('@')[0] ?? '';
    }

}