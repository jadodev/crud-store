import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BranchEntity } from '../entity/BranchEntity';
import { LoginRepositoryPort } from 'src/application/port/out/LoginRepositoryPort';
import { BranchDTO } from 'src/application/dto/BranchDTO';

@Injectable()
export class LoginRepository implements LoginRepositoryPort {
    constructor(
        @InjectRepository(BranchEntity)
        private readonly branchRepository: Repository<BranchEntity>,
      ) {}
    
      async findBranch(name: string, address: string, city: string): Promise<BranchDTO | null> {
        const branch = await this.branchRepository.findOne({
          where: { name, address, city },
        });
    
        if (!branch) return null;
    
        return new BranchDTO(
          branch.id,
          branch.name,
          branch.address,
          branch.city,
          branch.tenant_id,
          branch.password
        );
  }
}
