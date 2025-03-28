import { GlobalProduct } from "src/domain/entity/GlobalProduct";
import { GlobalProductEntity } from "../entity/GlobalproductEntity";

export class GlobalProductMapperInfra {
  static toDomain(entity: GlobalProductEntity): GlobalProduct {
    return new GlobalProduct(
      entity.id,
      entity.name,
      entity.description,
      entity.category,
      entity.price,
      entity.images,
    );
  }

  static toEntity(domain: GlobalProduct): GlobalProductEntity {
    const entity = new GlobalProductEntity();
    entity.id = domain.getId();
    entity.name = domain.getName();
    entity.description = domain.getDescription();
    entity.category = domain.getCategory();
    entity.price = domain.getPrice();
    entity.images = domain.getImages();
    return entity;
  }
}
