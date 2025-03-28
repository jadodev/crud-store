import { BranchProduct } from "src/domain/entity/BranchProduct";

export interface BranchProductService{
    getProducts(tenant_id:string): Promise<BranchProduct[]>;
    findByTenantAndProduct(tenantId: string, productId: number): Promise<BranchProduct | null>;
    upsert(product: BranchProduct): Promise<void>;
}