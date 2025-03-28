import { GlobalProduct } from "src/domain/entity/GlobalProduct";

export interface GlobalProductRepositoryPort {
    findByUniqueCriteria(name: string, description: string, price: number, tenantId:string): Promise<GlobalProduct | null>;
    save(producto: GlobalProduct): Promise<GlobalProduct>;
  }