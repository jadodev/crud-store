import { GlobalProduct } from "src/domain/entity/GlobalProduct";

export interface GlobalProductServicePort {
    saveOrUpdate(producto: GlobalProduct, tenantId: string): Promise<GlobalProduct>;
  }