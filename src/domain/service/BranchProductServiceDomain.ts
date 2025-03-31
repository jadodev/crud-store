import { Inject, Injectable } from "@nestjs/common";
import { BranchProduct } from "../entity/BranchProduct";
import { BranchProductService } from "../port/in/BranchProductServicePort";
import { BranchProductRepositoryPort } from "../port/out/BranchProductRepositoryPort";

@Injectable()
export class BranchProductServiceDomain implements BranchProductService{

    constructor(
        @Inject("branch-product-repository")
        private readonly repository: BranchProductRepositoryPort
    ){}

    async getProducts(tenant_id: string): Promise<BranchProduct[]> {
        return await this.repository.getProducts(tenant_id);
    }
    
    async findByTenantAndProduct(tenantId: string, product_id: number): Promise<BranchProduct | null> {
        return await this.repository.findByTenantAndProduct(tenantId, product_id);
    }
    
    async upsert(product: BranchProduct): Promise<void> {
        return await this.repository.upsert(product);
    }

} 