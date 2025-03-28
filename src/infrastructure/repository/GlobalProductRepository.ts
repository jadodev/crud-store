import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GlobalProductRepositoryPort } from "src/domain/port/out/GlobalProductRepositoryPort";
import { GlobalProductEntity } from "../entity/GlobalproductEntity";
import { Repository } from "typeorm";
import { GlobalProductMapperInfra } from "../Mapper/GlobalProductMapperInfra";
import { GlobalProduct } from "src/domain/entity/GlobalProduct";

@Injectable()
export class GlobalProductRepository implements GlobalProductRepositoryPort {
  constructor(
    @InjectRepository(GlobalProductEntity)
    private readonly repository: Repository<GlobalProductEntity>,
  ) {}

  async findByUniqueCriteria(name: string, description: string, price: number): Promise<GlobalProduct | null> {
    const entity = await this.repository.findOne({ where: { name, description, price } });
    return entity ? GlobalProductMapperInfra.toDomain(entity) : null;
  }

  async save(producto: GlobalProduct): Promise<GlobalProduct> {
    const entity = GlobalProductMapperInfra.toEntity(producto);
    const savedEntity = await this.repository.save(entity);
    return GlobalProductMapperInfra.toDomain(savedEntity);
  }
}