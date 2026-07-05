import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '@modules/uman/user/entities/user.entity';
import { Vendor } from '@modules/vendor/vendor/entities/vendor.entity';
import { File } from '@modules/master/file/entities/file.entity';
import { Currency } from '@modules/master/currency/entities/currency.entity';

@Entity('vendor_financial_reports')
export class VendorFinancialReport extends AuditBaseEntity {
    @Column({ name: 'vendor_id', type: 'int', nullable: true })
    vendorId?: number;

    @Column({ name: 'report_type', nullable: true })
    reportType?: string;

    @Column({ name: 'year', type: 'int', nullable: true })
    year?: number;

    @Column({ name: 'period_from', type: 'date', nullable: true })
    periodFrom?: Date;

    @Column({ name: 'period_to', type: 'date', nullable: true })
    periodTo?: Date;

    @Column({
        name: 'audit_status',
        type: 'enum',
        enum: ['AUDITED', 'UNAUDITED'],
        nullable: true,
    })
    auditStatus?: 'AUDITED' | 'UNAUDITED';

    @Column({ name: 'file_id', type: 'int', nullable: true })
    fileId?: number;

    @Column({ name: 'currency_id', type: 'int', nullable: true })
    currencyId?: number;

    @Column({
        name: 'current_assets',
        type: 'decimal',
        precision: 18,
        scale: 2,
        nullable: true,
    })
    currentAssets?: number;

    @Column({
        name: 'total_assets',
        type: 'decimal',
        precision: 18,
        scale: 2,
        nullable: true,
    })
    totalAssets?: number;

    @Column({
        name: 'current_liabilities',
        type: 'decimal',
        precision: 18,
        scale: 2,
        nullable: true,
    })
    currentLiabilities?: number;

    @Column({
        name: 'total_liabilities',
        type: 'decimal',
        precision: 18,
        scale: 2,
        nullable: true,
    })
    totalLiabilities?: number;

    @Column({
        name: 'total_revenue',
        type: 'decimal',
        precision: 18,
        scale: 2,
        nullable: true,
    })
    totalRevenue?: number;

    @Column({
        name: 'net_profit_loss_after_tax',
        type: 'decimal',
        precision: 18,
        scale: 2,
        nullable: true,
    })
    netProfitLossAfterTax?: number;

    @ManyToOne(() => Vendor, { onDelete: 'CASCADE', nullable: true })
    @JoinColumn({ name: 'vendor_id' })
    vendor?: Vendor;

    @ManyToOne(() => File, { nullable: true })
    @JoinColumn({ name: 'file_id' })
    file?: File;

    @ManyToOne(() => Currency, { nullable: true })
    @JoinColumn({ name: 'currency_id' })
    currency?: Currency;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser?: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser?: User;
}
