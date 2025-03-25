import { Inject, Injectable } from "@nestjs/common";
import { Branch } from "../entity/Branch";
import { BranchServicePort } from "../port/in/BranchServicePort";
import { BranchRepositoryPort } from "../port/out/BranchRepositoryPort";

@Injectable()
export class BranchDomainServce implements BranchServicePort {
    constructor( @Inject("repositoryPort") 
        private readonly repository: BranchRepositoryPort
    ){}
    
    async create(branch: Branch): Promise<Branch> {
        return await this.repository.save(branch);
    }
    
    async getById(id: number): Promise<Branch> {
        return await this.repository.getById(id);
    }
    
    async getAll(): Promise<Branch[]> {
        return await this.repository.getAll();
    }
    
    async update(id: number, branch: Branch): Promise<Branch> {
        return await this.repository.update(id, branch);
    }
    
    async delete(id: number): Promise<void>{
     await this.repository.delete(id);
    }
} 