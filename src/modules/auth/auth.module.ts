import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@modules/uman/user/entities/user.entity';
import { Role } from '@modules/uman/role/entities/role.entity';
import { UserHasRole } from '@modules/uman/user-has-roles/entities/user-has-role.entity';
import { Permission } from '@modules/uman/permission/entities/permission.entity';
import { Menu } from '@modules/uman/menu/entities/menu.entity';
// import { CompanyIdentity } from '@modules/vendor/company-identity/entities/company-identity.entity';
import { Site } from '@modules/master/site/entities/site.entity';
import { BusinessEntityType } from '@modules/master/business-entity-type/entities/business-entity-type.entity';
import { Country } from '@modules/master/country/entities/country.entity';
import { Province } from '@modules/master/province/entities/province.entity';
import { City } from '@modules/master/city/entities/city.entity';
import { Area } from '@modules/master/area/entities/area.entity';
import { DocumentType } from '@modules/master/document-type/entities/document-type.entity';
import { VendorDocument } from '@modules/vendor/vendor-document/entities/vendor-document.entity';
import { VendorCompany } from '@modules/vendor/vendor-company/entities/vendor-company.entity';
import { Vendor } from '@modules/vendor/vendor/entities/vendor.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            User,
            Role,
            UserHasRole,
            Permission,
            Menu,
            Site,
            Area,
            BusinessEntityType,
            Country,
            Province,
            City,
            Vendor,
            DocumentType,
            VendorDocument,
            VendorCompany
        ]),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                secret: config.get<string>('JWT_SECRET'),
                signOptions: {
                    expiresIn: config.get('JWT_EXPIRES_IN', '1d'),
                },
            }),
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
