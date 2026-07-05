import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankBranch } from './entities/bank-branch.entity';
import { BankBranchController } from './bank-branch.controller';
import { BankBranchService } from './bank-branch.service';

@Module({
    imports: [TypeOrmModule.forFeature([BankBranch])],
    controllers: [BankBranchController],
    providers: [BankBranchService],
    exports: [BankBranchService],
})
export class BankBranchModule {}
