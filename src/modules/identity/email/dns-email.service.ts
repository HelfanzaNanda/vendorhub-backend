import { Injectable } from '@nestjs/common';
import { promises as dns } from 'dns';
import { EmailValidator } from './email.validator';

@Injectable()
export class DnsEmailService {

    async hasMxRecord( email: string, ): Promise<boolean> {
        try {
            const domain = EmailValidator.getDomain(email);
            const records = await dns.resolveMx(domain);
            return records.length > 0;
        } catch {
            return false;
        }
    }

}