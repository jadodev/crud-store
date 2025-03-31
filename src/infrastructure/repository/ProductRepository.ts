import { Repository } from "typeorm";
import { ProductEntity } from "../entity/ProductEntity";
import { BranchProduct } from "src/domain/entity/BranchProduct";
import { BranchProductMapper } from "../Mapper/BranchProductMapper";
import { BranchProductRepositoryPort } from "src/domain/port/out/BranchProductRepositoryPort";
import { InjectRepository } from "@nestjs/typeorm";

export class ProductRepository implements BranchProductRepositoryPort {
    constructor(
        @InjectRepository(ProductEntity)
        private readonly repository: Repository<ProductEntity>) {}

    async getProducts(tenant_id: string): Promise<BranchProduct[]> {
        const entities = await this.repository.find({ where: { tenant_id: tenant_id } });
        return entities.map(BranchProductMapper.toDomain);
    }

    async findByTenantAndProduct(tenant_id: string, product_id: number): Promise<BranchProduct | null> {
        const entity = await this.repository.findOne({ where: { tenant_id: tenant_id, product_id: product_id } });
        return entity ? BranchProductMapper.toDomain(entity) : null;
    }

    async upsert(product: BranchProduct): Promise<void> {
        const entity = BranchProductMapper.toEntity(product);
        await this.repository.save(entity);
    }
}
