import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BranchController } from './infrastructure/controller/BranchController';
import { BranchDomainServce } from './domain/service/BranchDomainService';
import { BranchApplicationService } from './application/service/BranchApplicationService';
import { BrancHRepository } from './infrastructure/repository/BranchRepository';
import { BranchEntity } from './infrastructure/entity/BranchEntity';
import { ProductService } from './infrastructure/service/ProductService';
import { AuthController } from './infrastructure/controller/AuthController';
import { AuthService } from './application/service/AuthService';
import { LoginRepository } from './infrastructure/repository/LoginRepository';
import { JwtModule } from '@nestjs/jwt';
import { JwtMiddleware } from './middleware/JwtMiddleware';
import { GlobalProductRepository } from './infrastructure/repository/GlobalProductRepository';
import { GlobalProductServiceDomain } from './domain/service/GlobalProductServiceDomain';
import { GlobalProductController } from './infrastructure/controller/GlobalProductController';
import { GlobalProductEntity } from './infrastructure/entity/GlobalproductEntity';
import { GlobalProductServiceApp } from './application/service/GlobalProductServiceApp';
import { BranchProductServiceApp } from './application/service/BranchServiceProductApp';
import { BranchProductEntity } from './infrastructure/entity/BranchProductEntity';
import { BranchProductRepository } from './infrastructure/repository/BranchProductRepository';

@Module({
    imports:[
        TypeOrmModule.forRoot({
            type:"postgres",
            host: process.env.HOST_DB || "localhost",
            port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5433,
            username:process.env.USER_NAME_DB || "postgres",
            password:process.env.PASSWORD || "root",
            database:"postgres",
            autoLoadEntities:true,
        }),
        TypeOrmModule.forFeature([
            BranchEntity, 
            GlobalProductEntity,
            BranchProductEntity
        ]),
        JwtModule.register({
            secret: process.env.JWT_SECRET || 'secreto',
            signOptions: { expiresIn: '1h' },
          }),
    ],
    controllers:[
        BranchController, 
        AuthController,
        GlobalProductController
    ],
    providers:[
        ProductService,
        BranchApplicationService,
        AuthService,
        GlobalProductServiceApp,
        BranchProductServiceApp,
        {
            provide:"authRepositoryPort",
            useClass: LoginRepository
        },
        {
            provide:"serviceDomain",
            useClass:BranchDomainServce
        }, {
            provide:"repositoryPort",
            useClass:BrancHRepository
        },{
            provide:"global-product-repository",
            useClass:GlobalProductRepository
        },{
            provide:"productServiceDomain",
            useClass:GlobalProductServiceDomain
        },{
            provide:"product-repository",
            useClass:BranchProductRepository
        }
    ], 
    exports: [AuthService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(JwtMiddleware).forRoutes('branch/products')
    }
    
}
