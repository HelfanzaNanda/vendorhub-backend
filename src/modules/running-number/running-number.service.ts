import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { RunningNumber } from './entities/running-number.entity';

@Injectable()
export class RunningNumberService {
    constructor(
        @InjectRepository(RunningNumber)
        private readonly repository: Repository<RunningNumber>,
        private readonly dataSource: DataSource,
    ) {}

    async generate(code: string): Promise<string> {
        return this.dataSource.transaction(async (manager) => {
            const runningNumber = await manager
                .getRepository(RunningNumber)
                .createQueryBuilder('rn')
                .setLock('pessimistic_write')
                .where('rn.code = :code', { code })
                .getOne();

            if (!runningNumber) {
                throw new NotFoundException(
                    `Running number '${code}' not found`,
                );
            }

            // TODO: Reset number sesuai resetType
            // Saat ini hanya increment

            runningNumber.lastNumber += 1;

            await manager.save(runningNumber);

            const runningNo = String(runningNumber.lastNumber).padStart(6, '0');

            const date = this.formatDate();

            return `${runningNumber.prefix}-${date}-${runningNo}`;
        });
    }

    private formatDate(): string {
        const now = new Date();

        const yyyy = now.getFullYear();
        const mm = String(now.getMonth() + 1).padStart(2, '0');
        const dd = String(now.getDate()).padStart(2, '0');

        return `${yyyy}${mm}${dd}`;
    }
}
