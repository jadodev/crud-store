import { Branch } from "src/domain/entity/Branch";
import { BranchDTO } from "../dto/BranchDTO";

export class BranchMapper {
    public static toDto( branch: Branch): BranchDTO{
        return new BranchDTO(
            branch.id,
            branch.name,
            branch.address,
            branch.city
        )
    }

    public static toDomain( branchDto: BranchDTO): Branch{
        return new Branch(
            branchDto.id,
            branchDto.name,
            branchDto.address,
            branchDto.city
        )
    }
}