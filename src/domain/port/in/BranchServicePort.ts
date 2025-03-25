import { Branch } from "src/domain/entity/Branch";

export interface BranchServicePort {
    create(branch: Branch): Promise<Branch>;
    getById(id: number): Promise<Branch>;
    getAll(): Promise<Branch[]>;
    update(id: number, branch:Branch): Promise<Branch>;
    delete(id: number): Promise<void>;
}