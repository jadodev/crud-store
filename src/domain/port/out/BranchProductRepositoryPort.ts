import { BranchProduct } from "src/domain/entity/BranchProduct";

export interface BranchProductRepositoryPort {
    getProducts(tenant_id:string): Promise<BranchProduct[]>;
    findByTenantAndProduct(tenant_id: string, product_id: number): Promise<BranchProduct | null>;
    upsert(product: BranchProduct): Promise<void>;
}