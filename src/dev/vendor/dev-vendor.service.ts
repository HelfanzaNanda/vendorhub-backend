import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateMasterVendorDto } from './dto/create-master-vendor.dto';
import { VendorBuilder } from './builders/vendor.builder';
import { SCENARIOS } from './constants/vendor-master.constant';

@Injectable()
export class DevVendorService {
    constructor(
        private readonly dataSource: DataSource,
        private readonly vendorBuilder: VendorBuilder,
    ) {}

    async generateVendor(dto: CreateMasterVendorDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            // const scenarioConfig = SCENARIOS[dto.scenario] || SCENARIOS.SMALL_VENDOR;
            // const finalConfig = { ...scenarioConfig, ...dto.override };
            const finalConfig = {}
            const result = await this.vendorBuilder.build(queryRunner.manager, finalConfig);
            
            await queryRunner.commitTransaction();
            
            return result;
        } catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        } finally {
            await queryRunner.release();
        }
    }

    async deleteVendor(id: number) {
        // Implementation
    }

    async resetVendors() {
        // Implementation
    }
}
