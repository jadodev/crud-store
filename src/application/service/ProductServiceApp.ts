import { Inject, Injectable } from "@nestjs/common";
import { BranchProductServiceDomain } from "src/domain/service/BranchProductServiceDomain";
import { BranchProductMapper } from "../mapper/BranchProductMapper";
import { BranchProductDTO } from "../dto/BranchProductDTO";

@Injectable()
export class ProductServiceApp {
    constructor(
        @Inject("branch-product-service-domain") private readonly serviceDomain: BranchProductServiceDomain
    ){}
    
    async getProducts(tenantId: string): Promise<BranchProductDTO[]> {
        const products = await this.serviceDomain.getProducts(tenantId);
        return products.map(BranchProductMapper.toDto);
    }

    async findByTenantAndProduct(tenant_id: string, product_id: number): Promise<BranchProductDTO | null> {
        const product = await this.serviceDomain.findByTenantAndProduct(tenant_id, product_id);
        return product ? BranchProductMapper.toDto(product) : null;
    }

    async upsert(productDto: BranchProductDTO): Promise<void> {
        const product = BranchProductMapper.toDomain(productDto);
        await this.serviceDomain.upsert(product);
    }
} 