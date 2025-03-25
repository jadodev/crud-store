import { Inject, Injectable } from "@nestjs/common";
import { BranchDomainServce } from "src/domain/service/BranchDomainService";
import { BranchDTO } from "../dto/BranchDTO";
import { BranchMapper } from "../mapper/BranchMapper";

@Injectable()
export class BranchApplicationService {
    constructor(
        @Inject("serviceDomain")
        private readonly serviceDomain: BranchDomainServce
    ){}

    async create( branchDto: BranchDTO):Promise<BranchDTO>{
        const branch = BranchMapper.toDomain(branchDto);
        const branchCreated = await this.serviceDomain.create(branch);
        return BranchMapper.toDto(branchCreated);
    }

    async getAll(): Promise<BranchDTO[]>{
        const branches = await this.serviceDomain.getAll();
        return branches.map(branch => BranchMapper.toDto(branch));
    }

    async getById(id: number): Promise<BranchDTO>{
        const branch = await this.serviceDomain.getById(id);
        return BranchMapper.toDto(branch);
    }

    async update(id: number, branchDto: BranchDTO): Promise<BranchDTO>{
        const branch = BranchMapper.toDomain(branchDto);
        const branchUpdated = await this.serviceDomain.update(id, branch);
        return BranchMapper.toDto(branchUpdated);
    }

    async delete(id: number): Promise<void>{
        await this.serviceDomain.delete(id);
    }
} 