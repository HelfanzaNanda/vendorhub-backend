import {
    EventSubscriber,
    EntitySubscriberInterface,
    InsertEvent,
    UpdateEvent,
    RemoveEvent,
} from 'typeorm';
import { RequestContext } from '@common/context/request-context';
import { AuditBaseEntity } from '@common/entities/audit-base.entity';

@EventSubscriber()
export class AuditSubscriber implements EntitySubscriberInterface<AuditBaseEntity> {
    listenTo() {
        return Object;
    }

    beforeInsert(event: InsertEvent<AuditBaseEntity>) {
        const userId = RequestContext.userId;

        if (userId && event.entity) {
            event.entity.createdBy = userId;
            event.entity.updatedBy = userId;
        }
    }

    beforeUpdate(event: UpdateEvent<AuditBaseEntity>) {
        const userId = RequestContext.userId;
        if (userId && event.entity) {
            event.entity.updatedBy = userId;
        }
    }

    beforeRemove(event: RemoveEvent<AuditBaseEntity>) {
        const userId = RequestContext.userId;
        if (userId && event.entity) {
            event.entity.deletedBy = userId;
        }
    }
}
