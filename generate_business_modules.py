import os

modules = [
    {"name": "vendor-registration", "code": "WF_CALON_VENDOR", "class": "VendorRegistration"},
    {"name": "vendor-update", "code": "WF_UBAH_VENDOR", "class": "VendorUpdate"},
    {"name": "digital-signature", "code": "WF_TTD", "class": "DigitalSignature"},
    {"name": "proposed-to-reject", "code": "WF_PTR", "class": "ProposedToReject"},
    {"name": "delete-company-account", "code": "WF_DCA", "class": "DeleteCompanyAccount"},
    {"name": "reactivation", "code": "WF_REAKTIVASI", "class": "Reactivation"},
    {"name": "blacklist-unblacklist", "code": "WF_BLACKLIST", "class": "BlacklistUnblacklist"},
    {"name": "role-expired", "code": "WF_ROLE_EXPIRED", "class": "RoleExpired"},
]

base_dir = "src/modules/vendor/business-process"
os.makedirs(base_dir, exist_ok=True)

for mod in modules:
    mod_dir = os.path.join(base_dir, mod["name"])
    os.makedirs(mod_dir, exist_ok=True)
    
    # Controller
    ctrl_content = f"""import {{ Controller, Post, UseGuards, BadRequestException }} from '@nestjs/common';
import {{ JwtAuthGuard }} from '@common/guards/jwt-auth.guard';
import {{ PermissionsGuard }} from '@common/guards/permissions.guard';
import {{ CurrentUserId }} from '@common/decorators/current-user-id.decorator';
import {{ CurrentVendorId }} from '@common/decorators/current-vendor-id.decorator';
import {{ {mod['class']}Service }} from './{mod['name']}.service';

@Controller('{mod['name']}')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class {mod['class']}Controller {{
    constructor(private readonly service: {mod['class']}Service) {{}}

    @Post('submit')
    async submit(
        @CurrentUserId() userId: number,
        @CurrentVendorId() vendorId: number,
    ) {{
        return this.service.submit(userId, vendorId);
    }}
}}
"""
    with open(os.path.join(mod_dir, f"{mod['name']}.controller.ts"), "w") as f:
        f.write(ctrl_content)

    # Service
    srv_content = f"""import {{ Injectable, BadRequestException }} from '@nestjs/common';
import {{ InjectRepository }} from '@nestjs/typeorm';
import {{ Repository }} from 'typeorm';
import {{ VendorTemp }} from '@modules/vendor/temporary/vendor-temp/entities/vendor-temp.entity';
import {{ WorkflowTransactionService }} from '@modules/workflow-transaction/workflow-transaction/workflow-transaction.service';

@Injectable()
export class {mod['class']}Service {{
    constructor(
        @InjectRepository(VendorTemp)
        private vendorTempRepo: Repository<VendorTemp>,
        private workflowService: WorkflowTransactionService,
    ) {{}}

    async submit(userId: number, vendorId: number) {{
        // 1. Cari vendor_temp berdasarkan vendorId
        // Assuming vendorId maps to vendorTemp.vendorId. If not, logic might need adjustment.
        const vendorTemp = await this.vendorTempRepo.findOne({{
            where: {{ vendorId: vendorId }},
            order: {{ createdAt: 'DESC' }},
        }});

        if (!vendorTemp) {{
            throw new BadRequestException('Vendor temporary data not found.');
        }}

        // 2. Validasi vendor_temp masih berstatus Draft/Revision
        // Note: VendorTemp status enum is DRAFT or SUBMITTED. Assuming DRAFT is acceptable.
        if (vendorTemp.status !== 'DRAFT') {{
            throw new BadRequestException('Vendor temporary data is not in DRAFT state.');
        }}

        // 3. Panggil Generic Workflow Engine
        return this.workflowService.start({{
            workflowCode: '{mod['code']}',
            vendorTempId: vendorTemp.id,
        }});
    }}
}}
"""
    with open(os.path.join(mod_dir, f"{mod['name']}.service.ts"), "w") as f:
        f.write(srv_content)

    # Module
    mod_content = f"""import {{ Module }} from '@nestjs/common';
import {{ TypeOrmModule }} from '@nestjs/typeorm';
import {{ {mod['class']}Controller }} from './{mod['name']}.controller';
import {{ {mod['class']}Service }} from './{mod['name']}.service';
import {{ VendorTemp }} from '@modules/vendor/temporary/vendor-temp/entities/vendor-temp.entity';
import {{ WorkflowTransactionModule }} from '@modules/workflow-transaction/workflow-transaction/workflow-transaction.module';

@Module({{
    imports: [
        TypeOrmModule.forFeature([VendorTemp]),
        WorkflowTransactionModule,
    ],
    controllers: [{mod['class']}Controller],
    providers: [{mod['class']}Service],
    exports: [{mod['class']}Service],
}})
export class {mod['class']}Module {{}}
"""
    with open(os.path.join(mod_dir, f"{mod['name']}.module.ts"), "w") as f:
        f.write(mod_content)

print("Generated all business modules.")
