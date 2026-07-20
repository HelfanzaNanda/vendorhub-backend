import { AuditBaseEntity } from '@common/entities/audit-base.entity';
import { OtpChannel, OtpPurpose, OtpStatus } from '@common/enums/otp.enum';
import { User } from '@modules/uman/user/entities/user.entity';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('otp_requests')
export class OtpRequest extends AuditBaseEntity {
    
    @Column({
        type: 'enum',
        enum: OtpPurpose
    })
    purpose: OtpPurpose;

    @Column({
        type: 'enum',
        enum: OtpChannel
    })
    channel: OtpChannel;

    @Column()
    destination: string;

    @Column({
        name: 'otp_code'
    })
    otpCode: string;

    @Column({
        name: 'expired_at'
    })
    expiredAt: Date;

    @Column({
        nullable: true,
        name: 'verified_at'
    })
    verifiedAt?: Date;

    @Column({
        nullable: true,
        name: 'used_at'
    })
    usedAt?: Date;

    @Column({
        name: 'attempt_count'
    })
    attemptCount: number;

    @Column({
        name: 'max_attempt'
    })
    maxAttempt: number;

    @Column({
        type: 'enum',
        enum: OtpStatus
    })
    status: OtpStatus;

    @Column({
        name : 'verification_token',
        nullable: true
    })
    verificationToken?: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdByUser: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updatedByUser: User;
}
