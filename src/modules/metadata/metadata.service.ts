import { Injectable } from '@nestjs/common';
import { DocumentTypeService } from '@modules/master/document-type/document-type.service';

@Injectable()
export class MetadataService {
    constructor(
        private documentTypeService: DocumentTypeService,
    ) {}

    async getDocumentTypes(code?: string) {
        if(code){
            return await this.documentTypeService.findOneByCode(code);
        }else{
            return await this.documentTypeService.getMetaData();
        }
    }
}
