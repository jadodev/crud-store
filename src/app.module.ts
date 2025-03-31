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
import { BranchProductEntity } from './infrastructure/entity/BranchProductEntity';
import { BranchProductRepository } from './infrastructure/repository/BranchProductRepository';
import { BranchProductController } from './infrastructure/controller/BranchProductController';
import { ProductEntity } from './infrastructure/entity/ProductEntity';
import { BranchProductServiceDomain } from './domain/service/BranchProductServiceDomain';
import { ProductRepository } from './infrastructure/repository/ProductRepository';
import { ProductServiceApp } from './application/service/ProductServiceApp';
import { BranchProductServiceApp } from './application/service/BranchServiceProductApp';

@Module({
    imports:[
        TypeOrmModule.forRoot({
            type:"postgres",
            host:"postgres",
            port: 5432,
            username:process.env.USER_NAME_DB || "postgres",
            password:process.env.PASSWORD || "root",
            database:"postgres",
            autoLoadEntities:true,
        }),
        TypeOrmModule.forFeature([
            BranchEntity, 
            GlobalProductEntity,
            BranchProductEntity,
            ProductEntity
        ]),
        JwtModule.register({
            secret: process.env.JWT_SECRET || 'secreto',
            signOptions: { expiresIn: '1h' },
          }),
    ],
    controllers:[
        BranchController, 
        AuthController,
        GlobalProductController,
        BranchProductController,
    ],
    providers:[
        ProductService,
        BranchApplicationService,
        AuthService,
        GlobalProductServiceApp,
        ProductServiceApp,
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
        },{
            provide:"branch-product-service-domain",
            useClass:BranchProductServiceDomain
        },{
            provide:"branch-product-repository",
            useClass:ProductRepository
        }
    ], 
    exports: [AuthService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(JwtMiddleware).forRoutes('branch/products')
    }
    
}
