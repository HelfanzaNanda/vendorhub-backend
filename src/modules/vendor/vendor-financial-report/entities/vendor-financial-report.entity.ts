import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '@modules/uman/user/entities/user.entity';
import { Vendor } from '@modules/vendor/vendor/entities/vendor.entity';
import { File } from '@modules/master/file/entities/file.entity';
import { Currency } from '@modules/master/currency/entities/currency.entity';
import { FinancialPeriod } from '@modules/master/financial-period/entities/financial-period.entity';

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

    @Column({ name: 'financial_period_id', type: 'int', nullable: true })
    financialPeriodId?: number;

    @Column({
        name: 'current_assets',
        type: 'decimal',
        precision: 18,
        scale: 2,
        nullable: true,
        transformer: {
            to: (value?: number | null) => value,
            from: (value?: string | null) =>
                value == null ? null : Number(value),
        },
    })
    currentAssets?: number;

    @Column({
        name: 'total_assets',
        type: 'decimal',
        precision: 18,
        scale: 2,
        nullable: true,
        transformer: {
            to: (value?: number | null) => value,
            from: (value?: string | null) =>
                value == null ? null : Number(value),
        },
    })
    totalAssets?: number;

    @Column({
        name: 'current_liabilities',
        type: 'decimal',
        precision: 18,
        scale: 2,
        nullable: true,
        transformer: {
            to: (value?: number | null) => value,
            from: (value?: string | null) =>
                value == null ? null : Number(value),
        },
    })
    currentLiabilities?: number;

    @Column({
        name: 'total_liabilities',
        type: 'decimal',
        precision: 18,
        scale: 2,
        nullable: true,
        transformer: {
            to: (value?: number | null) => value,
            from: (value?: string | null) =>
                value == null ? null : Number(value),
        },
    })
    totalLiabilities?: number;

    @Column({
        name: 'total_revenue',
        type: 'decimal',
        precision: 18,
        scale: 2,
        nullable: true,
        transformer: {
            to: (value?: number | null) => value,
            from: (value?: string | null) =>
                value == null ? null : Number(value),
        },
    })
    totalRevenue?: number;

    @Column({
        name: 'net_profit_loss_after_tax',
        type: 'decimal',
        precision: 18,
        scale: 2,
        nullable: true,
        transformer: {
            to: (value?: number | null) => value,
            from: (value?: string | null) =>
                value == null ? null : Number(value),
        },
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

    @ManyToOne(() => FinancialPeriod, { nullable: true })
    @JoinColumn({ name: 'financial_period_id' })
    financialPeriod?: FinancialPeriod;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser?: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser?: User;
}
