import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BranchController } from './infrastructure/controller/BranchController';
import { BranchDomainServce } from './domain/service/BranchDomainService';
import { BranchApplicationService } from './application/service/BranchApplicationService';
import { BrancHRepository } from './infrastructure/repository/BranchRepository';
import { BranchEntity } from './infrastructure/entity/BranchEntity';

@Module({
    imports:[
        TypeOrmModule.forRoot({
            type:"postgres",
            host:"localhost",
            port:5432,
            username:"postgres",
            password:"root",
            database:"postgres",
            autoLoadEntities:true,
        }),
        TypeOrmModule.forFeature([BranchEntity])
    ],
    controllers:[BranchController],
    providers:[
        BranchApplicationService,
        {
            provide:"serviceDomain",
            useClass:BranchDomainServce
        }, {
            provide:"repositoryPort",
            useClass:BrancHRepository
        }
    ], 
})
export class AppModule {}
