import { Branch } from "src/domain/entity/Branch";
import { BranchEntity } from "../entity/BranchEntity";

export class MapperEntity {
  public static toDomain(branchEntity: BranchEntity):Branch {
        return new Branch(
            branchEntity.id,
            branchEntity.name,
            branchEntity.address,
            branchEntity.city,
            branchEntity.tenantid,
            branchEntity.password
        )
  }

  public static toEntity(branch: Branch):BranchEntity {
    return new BranchEntity(
        branch.id,
        branch.name,
        branch.address,
        branch.city,
        branch.tenantid,
        branch.password 
    )
  }
}