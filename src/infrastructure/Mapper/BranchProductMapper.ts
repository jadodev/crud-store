import { BranchProduct } from "src/domain/entity/BranchProduct";
import { ProductEntity } from "../entity/ProductEntity";
import { GlobalProductMapperInfra } from "./GlobalProductMapperInfra";


export class BranchProductMapper {
    static toDomain(entity: ProductEntity): BranchProduct {
        return new BranchProduct(
            entity.tenant_id,
            entity.product_id,
            entity.quantity,
            entity.product ? GlobalProductMapperInfra.toDomain(entity.product) : undefined
        );
    }

    static toEntity(domain: BranchProduct): ProductEntity {
        const entity = new ProductEntity();
        entity.tenant_id = domain.tenant_id;
        entity.product_id = domain.product_id;
        entity.quantity = domain.quantity;
        entity.product = domain.product ? GlobalProductMapperInfra.toEntity(domain.product) : undefined;
        return entity;
    }
}
