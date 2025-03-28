import { BranchProduct } from "src/domain/entity/BranchProduct";

export interface BranchProductRepositoryPort {
    getProducts(tenant_id:string): Promise<BranchProduct[]>;
    findByTenantAndProduct(tenantId: string, productId: number): Promise<BranchProduct | null>;
    upsert(product: BranchProduct): Promise<void>;
}