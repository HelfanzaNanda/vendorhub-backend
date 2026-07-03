import { Area } from '@modules/master/area/entities/area.entity';
import { BusinessEntityType } from '@modules/master/business-entity-type/entities/business-entity-type.entity';
import { City } from '@modules/master/city/entities/city.entity';
import { Country } from '@modules/master/country/entities/country.entity';
import { Province } from '@modules/master/province/entities/province.entity';
import { Site } from '@modules/master/site/entities/site.entity';
import { TermsConditionItem } from '@modules/master/terms-condition-item/entities/terms-condition-item.entity';
import { TermsCondition } from '@modules/master/terms-condition/entities/term-condition.entity';
import { VendorStatus } from '@modules/master/vendor-status/entities/vendor-status.entity';
import { Menu } from '@modules/uman/menu/entities/menu.entity';
import { Permission } from '@modules/uman/permission/entities/permission.entity';
import { Role } from '@modules/uman/role/entities/role.entity';
import { UserHasRole } from '@modules/uman/user-has-roles/entities/user-has-role.entity';
import { User } from '@modules/uman/user/entities/user.entity';
// import { CompanyIdentity } from '@modules/vendor/company-identity/entities/company-identity.entity';
import { File } from '@modules/master/file/entities/file.entity';
import { CompanyPersonnelType } from '@modules/master/company-personnel-type/entities/company-personnel-type.entity';
import 'dotenv/config';
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: 'mariadb',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB,
    // entities: ['dist/**/*.entity.js'],
    // migrations: ['dist/database/migrations/*.js'],

    entities: [
        User,
        UserHasRole,
        Role,
        Permission,
        Menu,
        // Site, Area, BusinessEntityType, Country, Province, City, VendorStatus,
        File, CompanyPersonnelType
    ],
    migrations: ['src/database/migrations/*.ts'],
  
    synchronize: false,
});
