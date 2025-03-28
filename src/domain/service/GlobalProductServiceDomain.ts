import { Inject, Injectable } from '@nestjs/common';
import { GlobalProductServicePort } from '../port/in/GlobalProductServicePort';
import { GlobalProductRepositoryPort } from '../port/out/GlobalProductRepositoryPort';
import { GlobalProduct } from '../entity/GlobalProduct';


@Injectable()
export class GlobalProductServiceDomain implements GlobalProductServicePort {
  constructor(
    @Inject("global-product-repository")
    private readonly repository: GlobalProductRepositoryPort
  ) {}

  async saveOrUpdate(product: GlobalProduct, tenantId: string): Promise<GlobalProduct> {
    const existingPrduct = await this.repository.findByUniqueCriteria(
      product.getName(),
      product.getDescription(),
      product.getPrice(),
      tenantId
    );

    if (existingPrduct) {
      return existingPrduct;
    }

    product.setTenantId(tenantId);

    return this.repository.save(product);
  }
}
