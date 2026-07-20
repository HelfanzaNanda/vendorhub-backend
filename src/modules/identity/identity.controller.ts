import { Body, Controller, Post } from "@nestjs/common";
import { EmailValidationService } from "./email/email-validation.service";
import { PhoneValidationService } from "./phone/phone-validation.service";
import { CheckEmailDto } from "./email/dto/check-email.dto";
import { CheckPhoneDto } from "./phone/dto/check-phone.dto";
import { PrivyValidationService } from "./privy/privy-validation.service";
import { CheckPrivyDto } from "./privy/dto/check-privy.dto";

@Controller('identity')
export class IdentityController {

    constructor(
        private readonly emailService: EmailValidationService,
        private readonly phoneService: PhoneValidationService,
        private readonly privyService: PrivyValidationService,
    ) {}

    @Post('email/check')
    checkEmail( @Body() dto: CheckEmailDto) {
        return this.emailService.check(dto.email);
    }

    @Post('phone/check')
    checkPhone( @Body() dto: CheckPhoneDto) {
        return this.phoneService.check(dto.phone);
    }

    @Post('privy/check')
    checkPrivy( @Body() dto: CheckPrivyDto) {
        return this.privyService.check(dto.privyId, dto.email);
    }

}