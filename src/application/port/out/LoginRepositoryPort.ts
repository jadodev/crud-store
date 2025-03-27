import { BranchDTO } from "src/application/dto/BranchDTO";

export interface LoginRepositoryPort {
    findBranch(name: string, address: string, city: string): Promise<BranchDTO | null>;
}
