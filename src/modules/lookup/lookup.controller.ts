import { RequirePermission } from "@common/decorators/permissions.decorator";
import { JwtAuthGuard } from "@common/guards/jwt-auth.guard";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "src/common/guards/permissions.guard";
import { PaginationQueryDto } from "@common/pagination/pagination-query.dto";
import { LookupService } from "./lookup.service";

@Controller('lookups')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class LookupController {

    constructor(private service: LookupService) { }

    @Get('sites')
    pagination() {
        return this.service.getSites();
    }
}
