import { Inject, Injectable } from "@nestjs/common";
import { GlobalProductServiceDomain } from "src/domain/service/GlobalProductServiceDomain";
import { GlobalProductDTO } from "../dto/GlobalProductDTO";
import { GlobalProductMapper } from "../mapper/GlobalProductMapper";

@Injectable()
export class GlobalProductServiceApp {
  constructor(
    @Inject("productServiceDomain")
    private readonly domainService: GlobalProductServiceDomain
  ) {}

  async registerProductos(productsDTO: GlobalProductDTO[], tenantId: string) {
    const products = productsDTO.map((dto) => GlobalProductMapper.toDomain(dto));
    
    const results = await Promise.all(
      products.map((product) => this.domainService.saveOrUpdate(product, tenantId)),
    );

    return results.map((product) => GlobalProductMapper.toDTO(product));
  }
}