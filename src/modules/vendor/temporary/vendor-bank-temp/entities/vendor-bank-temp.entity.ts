import { AuditBaseEntity } from "@common/entities/audit-base.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { User } from '@modules/uman/user/entities/user.entity';
import { VendorTemp } from '@modules/vendor/temporary/vendor-temp/entities/vendor-temp.entity';
import { VendorBank } from '@modules/vendor/vendor-bank/entities/vendor-bank.entity';
import { BankBranch } from '@modules/master/bank-branch/entities/bank-branch.entity';
import { Currency } from '@modules/master/currency/entities/currency.entity';
import { File } from '@modules/master/file/entities/file.entity';

@Entity('vendor_bank_temps')
export class VendorBankTemp extends AuditBaseEntity {
    @Column({ name: 'vendor_temp_id', type: 'int', nullable: true })
    vendorTempId?: number;

    @Column({ name: 'vendor_bank_id', type: 'int', nullable: true })
    vendorBankId?: number;

    @Column({ name: 'action', nullable: true })
    action?: string;

    @Column({ name: 'review_status', nullable: true })
    reviewStatus?: string;

    @Column({ type: 'text', nullable: true })
    reviewNotes?: string;

    @Column({ name: 'bank_branch_id', type: 'int', nullable: true })
    bankBranchId?: number;

    @Column({ name: 'currency_id', type: 'int', nullable: true })
    currencyId?: number;

    @Column({ name: 'account_name', nullable: true })
    accountName?: string;

    @Column({ name: 'account_number', nullable: true })
    accountNumber?: string;

    @Column({ name: 'file_id', type: 'int', nullable: true })
    fileId?: number;

    @ManyToOne(() => VendorTemp, { onDelete: 'CASCADE', nullable: true })
    @JoinColumn({ name: 'vendor_temp_id' })
    vendorTemp?: VendorTemp;

    @ManyToOne(() => VendorBank, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'vendor_bank_id' })
    vendorBank?: VendorBank;

    @ManyToOne(() => BankBranch, { nullable: true })
    @JoinColumn({ name: 'bank_branch_id' })
    bankBranch?: BankBranch;

    @ManyToOne(() => Currency, { nullable: true })
    @JoinColumn({ name: 'currency_id' })
    currency?: Currency;

    @ManyToOne(() => File, { nullable: true })
    @JoinColumn({ name: 'file_id' })
    file?: File;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser?: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser?: User;
}
