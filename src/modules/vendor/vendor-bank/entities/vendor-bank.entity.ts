import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '@modules/uman/user/entities/user.entity';
import { Vendor } from '@modules/vendor/vendor/entities/vendor.entity';
import { BankBranch } from '@modules/master/bank-branch/entities/bank-branch.entity';
import { Currency } from '@modules/master/currency/entities/currency.entity';
import { File } from '@modules/master/file/entities/file.entity';

@Entity('vendor_banks')
export class VendorBank extends AuditBaseEntity {
    @Column({ name: 'vendor_id', type: 'int', nullable: true })
    vendorId?: number;

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

    @ManyToOne(() => Vendor, { onDelete: 'CASCADE', nullable: true })
    @JoinColumn({ name: 'vendor_id' })
    vendor?: Vendor;

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
