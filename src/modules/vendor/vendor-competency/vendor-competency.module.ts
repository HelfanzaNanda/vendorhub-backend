import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorCompetency } from './entities/vendor-competency.entity';
import { VendorCustomerReference } from './entities/vendor-customer-reference.entity';

@Module({
    imports: [TypeOrmModule.forFeature([VendorCompetency, VendorCustomerReference])],
    exports: [TypeOrmModule],
})
export class VendorCompetencyModule {}
