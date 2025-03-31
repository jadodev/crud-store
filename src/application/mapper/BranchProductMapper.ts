import { BranchProduct } from "src/domain/entity/BranchProduct";
import { BranchProductDTO } from "../dto/BranchProductDTO";
import { GlobalProductMapper } from "./GlobalProductMapper";

export class BranchProductMapper {
    public static toDto (branchProduct: BranchProduct): BranchProductDTO{
        return new BranchProductDTO(
            branchProduct.tenant_id,
            branchProduct.product_id,
            branchProduct.quantity,
            branchProduct.product ? GlobalProductMapper.toDTO(branchProduct.product) : undefined
        );    
    }

    public static toDomain(branchProductDto: BranchProductDTO): BranchProduct{
        return new BranchProduct(
            branchProductDto.tenant_id,
            branchProductDto.product_id,
            branchProductDto.quantity,
            branchProductDto.product ? GlobalProductMapper.toDomain(branchProductDto.product) : undefined
        )
    }
}
