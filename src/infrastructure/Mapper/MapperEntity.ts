import { BranchDTO } from "src/application/dto/BranchDTO";
import { Branch } from "src/domain/entity/Branch";
import { BranchEntity } from "../entity/BranchEntity";

export class MapperEntity {
  public static toDomain(branchEntity: BranchEntity):Branch {
        return new Branch(
            branchEntity.id,
            branchEntity.name,
            branchEntity.address,
            branchEntity.city
        )
  }

  public static toEntity(branch: Branch):BranchEntity {
    return new BranchDTO(
        branch.id,
        branch.name,
        branch.address,
        branch.city
    )
  }
}