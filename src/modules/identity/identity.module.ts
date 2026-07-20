import { Module } from "@nestjs/common";
import { LookupModule } from "../lookup/lookup.module";
import { IdentityController } from "./identity.controller";
import { EmailValidationService } from "./email/email-validation.service";
import { PhoneValidationService } from "./phone/phone-validation.service";
import { DisposableEmailService } from "./email/disposable-email.service";
import { DnsEmailService } from "./email/dns-email.service";
import { EmailValidator } from "./email/email.validator";
import { PhoneValidator } from "./phone/phone.validator";
import { VendorModule } from "@modules/vendor/vendor.module";
import { UserModule } from "@modules/uman/user/user.module";
import { UserRepository } from "@modules/uman/user/repositories/user.repository";
import { LookupService } from "@modules/lookup/lookup.service";
import { PrivyValidationService } from "./privy/privy-validation.service";
import { PrivyValidator } from "./privy/privy.validator";

@Module({
    imports: [
        LookupModule,
        UserModule,
        VendorModule,
    ],
    controllers: [
        IdentityController,
    ],
    providers: [
        EmailValidationService,
        DisposableEmailService,
        DnsEmailService,
        PhoneValidationService,
        UserRepository,
        EmailValidator,
        PhoneValidator,
        PrivyValidator,
        PrivyValidationService
    ],
    exports: [
        EmailValidationService,
        PhoneValidationService,
        PrivyValidationService
    ],
})
export class IdentityModule {}