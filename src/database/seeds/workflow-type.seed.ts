import { WorkflowType } from "@modules/master/workflow-type/entities/workflow-type.entity";
import { DataSource } from "typeorm";

export async function seedWorkflowType(dataSource: DataSource) {

    const arr = [
        {
            "code" : "WF_RG",
            "name": "Workflow Data Calon Vendor",
        },
        {
            "code" : "WF_UD",
            "name": "Workflow Ubah Data Vendor",
        },
        {
            "code" : "WF_TTD",
            "name": "Workflow Tanda tangan Digital",
        },
        {
            "code" : "WF_PTR",
            "name": "Workflow Proposed to Reject",
        },
        {
            "code" : "WF_DCA",
            "name": "Workflow Delete Company Account",
        },
        {
            "code" : "WF_RA",
            "name": "Workflow Reaktivasi",
        },
        {
            "code" : "WF_BL",
            "name": "Workflow Blacklist Unblacklist",
        },
        {
            "code" : "WF_RE",
            "name": "Workflow Role Expired",
        },
    ];


    const repo = dataSource.getRepository(WorkflowType);


    for (const obj of arr) {
        await repo.save(
            repo.create({
                name : obj.name,
                code: obj.code,
            })
        )
    }
    console.log('✅ WorkflowType seeded');
}