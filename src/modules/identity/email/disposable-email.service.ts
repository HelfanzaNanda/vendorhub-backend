import { Injectable } from '@nestjs/common';
import { EmailValidator } from './email.validator';

@Injectable()
export class DisposableEmailService {

    private readonly disposableDomains = [
        'yopmail.com',
        'mailinator.com',
        'guerrillamail.com',
        'tempmail.com',
        '10minutemail.com',
        'trashmail.com',
    ];

    isDisposable(email: string): boolean {

        const domain =
            EmailValidator.getDomain(email);

        return this.disposableDomains.includes(domain);

    }

}