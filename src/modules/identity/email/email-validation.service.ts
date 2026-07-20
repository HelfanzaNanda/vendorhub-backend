import {
    BadRequestException,
    Injectable,
} from '@nestjs/common';


import { DisposableEmailService } from './disposable-email.service';
import { DnsEmailService } from './dns-email.service';
import { EmailValidator } from './email.validator';
import { UserRepository } from '@modules/uman/user/repositories/user.repository';

@Injectable()
export class EmailValidationService {

    constructor(
        private readonly disposableEmailService: DisposableEmailService,
        private readonly dnsEmailService: DnsEmailService,
        private readonly userRepository: UserRepository,
    ) {}

    async check(email: string) {

        email = EmailValidator.normalize(email);
        
        if (this.disposableEmailService.isDisposable(email) ) {
            throw new BadRequestException(
                'Disposable email is not allowed.',
            );
        }

        const hasMx = await this.dnsEmailService.hasMxRecord(email);

        if (!hasMx) {
            throw new BadRequestException(
                'Email domain cannot receive email.',
            );
        }

        const internalUser = await this.userRepository.findInternalByEmail(email);

        if (internalUser) {
            throw new BadRequestException(
                'Email has already been registered.',
            );
        }

        const vendorUser = await this.userRepository.findExternalByEmail(email);

        if (vendorUser) {
            throw new BadRequestException(
                'Email has already been registered.',
            );
        }

        return {
            valid: true,
            email,
        };

    }

}