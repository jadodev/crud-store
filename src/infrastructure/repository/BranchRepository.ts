import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BranchRepositoryPort } from "src/domain/port/out/BranchRepositoryPort";
import { BranchEntity } from "../entity/BranchEntity";
import { Branch } from "src/domain/entity/Branch";
import { Repository } from "typeorm";
import { MapperEntity } from "../Mapper/MapperEntity";
import { BranchExceptionHandler } from "src/exceptions/HandlerException";

@Injectable()
export class BrancHRepository implements BranchRepositoryPort {
    constructor(
        @InjectRepository(BranchEntity)
        private readonly branchRepository: Repository<BranchEntity>
    ){}

    async save(branch: Branch): Promise<Branch> {
        const entity = MapperEntity.toEntity(branch);
        const savedEntity = await this.branchRepository.save(entity);
        return MapperEntity.toDomain(savedEntity);
    }

    async getById(id: number): Promise<Branch> {
        const entity = await this.branchRepository.findOne({ where:{id}});
        if(!entity) throw BranchExceptionHandler.notFound();
        return MapperEntity.toDomain(entity);
    }

    async getBytenantid(id: string): Promise<Branch> {
        const entity = await this.branchRepository.findOneBy({ tenantid: id });
        if(!entity) throw BranchExceptionHandler.notFound();
        return MapperEntity.toDomain(entity);
    }

    async getAll(): Promise<Branch[]> {
        const branches = await this.branchRepository.find();
        return branches.map(MapperEntity.toDomain);
    }

    async update(id: number, branch: Branch): Promise<Branch> {
        const branchEntity = MapperEntity.toEntity(branch);
        await this.branchRepository.update(id, branchEntity);

        const entityId = await this.branchRepository.findOne({ where:{id}});
        if(!entityId) throw BranchExceptionHandler.notFound();

        return MapperEntity.toDomain(entityId);
    }

    async delete(id: number): Promise<void> {
        await this.branchRepository.delete(id);
    }
} 