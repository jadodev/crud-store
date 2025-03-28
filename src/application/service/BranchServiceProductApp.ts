import { Inject, Injectable } from "@nestjs/common";
import { BranchProductRepository } from "src/infrastructure/repository/BranchProductRepository";

@Injectable()
export class BranchProductServiceApp {
  constructor(
    @Inject("product-repository")
    private readonly branchProductRepository: BranchProductRepository,
  ) {}

  async registerBranchProduct(productId: number, tenantId: string, quantity: number) {

    return this.branchProductRepository.associateProductToBranch(productId, tenantId, quantity);
  }
}