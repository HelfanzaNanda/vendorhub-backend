import { SiteService } from "@modules/master/site/site.service";

export class LookupService {
    constructor(
        private siteService: SiteService
    ) { }

    

    async getSites() {
        return await this.siteService.findOptions();
    }
}