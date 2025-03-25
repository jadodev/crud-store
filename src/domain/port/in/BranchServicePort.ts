import { Branch } from "src/domain/entity/Branch";

export interface BranchServicePort {
    create(branch: Branch): Promise<Branch>;
    getById(id: number): Promise<Branch>;
    getAll(): Promise<Branch[]>;
    
}