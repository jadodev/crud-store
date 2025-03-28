import { Injectable } from "@nestjs/common";
import { BranchProductEntity } from "../entity/BranchProductEntity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { GlobalProductEntity } from "../entity/GlobalproductEntity";

@Injectable()
export class BranchProductRepository {
  constructor(
    @InjectRepository(BranchProductEntity)
    private readonly repository: Repository<BranchProductEntity>,
  ) {}

  async associateProductToBranch(productId: number, tenantId: string, quantity: number) {
   
    const product = new GlobalProductEntity();
    product.id = productId;

    return this.repository.upsert(
        {
            tenant_id: tenantId,
            product_id: productId,
            product,
            quantity,
        },
        ["tenant_id", "product_id"]
    );
  } 
}