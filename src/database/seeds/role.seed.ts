import { DataSource } from 'typeorm';
import { Role } from '@modules/uman/role/entities/role.entity';
import { Permission } from '@modules/uman/permission/entities/permission.entity';


export async function seedRoles(dataSource: DataSource) {
    const roleRepo = dataSource.getRepository(Role);
    const permissionRepo = dataSource.getRepository(Permission);

    const roles = await roleRepo.save([
        { code: 'SUPER_USER', name: 'Super User' },
        { code: 'VENDOR', name: 'Vendor' },
        { code: 'ADMIN_OPS', name: 'Admin Operational' },
        { code: 'APPROVER', name: 'Approver' },
    ]);

    const permissions = await permissionRepo.find();

    const superUserRole = roles.find(r => r.code === 'SUPER_USER');
    if (!superUserRole) throw new Error('SUPER_USER role not found');

    const rows = permissions.map(p => ({
        role_id: superUserRole.id,
        permission_id: p.id,
    }));

    await dataSource.createQueryBuilder()
        .insert()
        .into('role_has_permissions')
        .values(rows)
        .execute();


    console.log('✅ Role seeded');
}
