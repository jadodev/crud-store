import { GlobalProduct } from "src/domain/entity/GlobalProduct";
import { GlobalProductDTO } from "../dto/GlobalProductDTO";

export class GlobalProductMapper {
  static toDomain(dto: GlobalProductDTO): GlobalProduct {
    return new GlobalProduct(
      dto.id,
      dto.name,
      dto.description,
      dto.category,
      dto.price,
      dto.images && dto.images.length > 0 ? dto.images : [],
    );
  }

  static toDTO(domain: GlobalProduct): GlobalProductDTO {
    return {
      id: domain.getId(),
      name: domain.getName(),
      description: domain.getDescription(),
      category: domain.getCategory(),
      available: domain.getAvailable(),
      stock: domain.getStock(),
      price: domain.getPrice(),
      images: domain.getImages() && domain.getImages().length > 0 ? domain.getImages() : [],
    };
  }
}
