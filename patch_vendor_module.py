with open("src/modules/vendor/vendor.module.ts", "r") as f:
    content = f.read()

import_str = """
import { VendorRegistrationModule } from './business-process/vendor-registration/vendor-registration.module';
import { VendorUpdateModule } from './business-process/vendor-update/vendor-update.module';
import { DigitalSignatureModule } from './business-process/digital-signature/digital-signature.module';
import { ProposedToRejectModule } from './business-process/proposed-to-reject/proposed-to-reject.module';
import { DeleteCompanyAccountModule } from './business-process/delete-company-account/delete-company-account.module';
import { ReactivationModule } from './business-process/reactivation/reactivation.module';
import { BlacklistUnblacklistModule } from './business-process/blacklist-unblacklist/blacklist-unblacklist.module';
import { RoleExpiredModule } from './business-process/role-expired/role-expired.module';
"""

if "VendorRegistrationModule" not in content:
    content = import_str + content
    
    # insert into imports array
    imports_to_add = """
        VendorRegistrationModule,
        VendorUpdateModule,
        DigitalSignatureModule,
        ProposedToRejectModule,
        DeleteCompanyAccountModule,
        ReactivationModule,
        BlacklistUnblacklistModule,
        RoleExpiredModule,
"""
    content = content.replace("imports: [", "imports: [" + imports_to_add)
    content = content.replace("exports: [", "exports: [" + imports_to_add)

    with open("src/modules/vendor/vendor.module.ts", "w") as f:
        f.write(content)
