import { Injectable } from '@nestjs/common';


@Injectable()
export class PrivyValidationService {

    constructor() {}

    async check(privyId: string, email : string) {
        return {
            valid: true,
            privyId: privyId,
            email: email
        };

    }

}