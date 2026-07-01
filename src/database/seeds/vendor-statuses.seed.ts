import { VendorStatus } from "@modules/master/vendor-status/entities/vendor-status.entity";
import { DataSource } from "typeorm";
export async function seedVendorStatus(dataSource: DataSource) {

    const arr = [
        {
            "code" : "PRE_REGISTRATION",
            "name": "Pre-Registration",
            "description" : "Saat vendor sebelum melakukan registrasi"
        },
        {
            "code" : "REGISTRATION",
            "name": "Registration",
            "description" : "Saat vendor melakukan registrasi"
        },
        {
            "code" : "ACTIVE",
            "name": "Active",
            "description" : "Vendor aktif"
        },
        {
            "code" : "REQUEST_FOR_REAPPROVAL",
            "name": "Request For Reapproval",
            "description" : "Status pada saat vendor melakukan perubahan data perusahaan"
        },
        {
            "code" : "REJECT_REGISTRATION",
            "name": "Reject Registration",
            "description" : "Approver menolak calon vendor pada saat workflow"
        },
        {
            "code" : "BLACKLIST",
            "name": "Blacklist",
            "description" : "Vendor yang masuk ke daftar blacklist"
        },
        {
            "code" : "PASSIVE",
            "name": "Passive",
            "description" : "Vendor yang tidak merubah datanya pada waktu tertentu setelah pemuktahiran data"
        },
        {
            "code" : "REVISION_REGISTRATION",
            "name": "Revision Registration",
            "description" : "Pending calon vendor dimana admin operasional mengirim notifikasi ke vendor untuk merevisi data perusahaannya (Status vendor yang belum pernah aktif)"
        },
        {
            "code" : "REQUEST_FOR_UPDATE",
            "name": "Request For Update",
            "description" : "Status vendor disaat pemuktahiran data , permintaan untuk segera merubah data perusahaannya"
        },
        {
            "code" : "REVISION",
            "name": "Revision",
            "description" : "Status vendor yang harus merevisi datanya setelah merubah data perusahaan (vendor yang sudah pernah aktif"
        },
        {
            "code" : "RE_ACTIVATION",
            "name": "Re-Activation",
            "description" : "Vendor yang tidak merubah datanya pada waktu tertentu yang dalam status passive"
        }
    ];

    const repo = dataSource.getRepository(VendorStatus);


    for (const obj of arr) {
        await repo.save(
            repo.create({
                name : obj.name,
                code: obj.code,
                description: obj.description,
            })
        )
    }

    console.log('✅ Vendor Status seeded');
}