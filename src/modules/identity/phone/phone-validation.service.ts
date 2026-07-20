import { BadRequestException, Injectable } from '@nestjs/common';
import { PhoneValidator } from './phone.validator';
import { LookupService } from '@modules/lookup/lookup.service';

@Injectable()
export class PhoneValidationService {

    constructor(
        private readonly lookupService: LookupService,
    ) {}

    async check(phone: string) {
        const localPhone = PhoneValidator.toLocal(phone);

        if (!/^08\d{8,13}$/.test(localPhone)) {
            throw new BadRequestException(
                'Invalid phone number format.',
            );
        }

        const prefixes = await this.lookupService.getTelcoPrefixes();
        const prefix4 = localPhone.substring(0, 4);
        const prefix3 = localPhone.substring(0, 3);

        const valid = prefixes.some(x => x.label == prefix4 || x.label == prefix3);

        if (!valid) {
            throw new BadRequestException(
                'Kindly use a Telkomsel number',
            );
        }

        return {
            valid: true,
            phone: localPhone,
            internationalPhone: PhoneValidator.toInternational(localPhone),
        };

    }

}