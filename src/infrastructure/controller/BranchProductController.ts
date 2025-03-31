import { Controller, Get, Param, Body, Post, Query } from "@nestjs/common";
import { BranchProductDTO } from "src/application/dto/BranchProductDTO";
import { ProductServiceApp } from "src/application/service/ProductServiceApp";

@Controller("products")
export class BranchProductController {
    constructor(
        private readonly applicationService: ProductServiceApp
    ) {}

    @Get()
    public async getProducts(@Query("tenant_id") tenant_id: string): Promise<BranchProductDTO[]> {
        return this.applicationService.getProducts(tenant_id);
    }

    @Get(":product_id")
    public async findByTenantAndProduct(
        @Query("tenant_id") tenant_id: string,
        @Param("product_id") product_id: number
    ): Promise<BranchProductDTO | null> {
        return this.applicationService.findByTenantAndProduct(tenant_id, product_id);
    }

    @Post()
    public async upsert(@Body() productDto: BranchProductDTO): Promise<void> {
        await this.applicationService.upsert(productDto);
    }
}
 