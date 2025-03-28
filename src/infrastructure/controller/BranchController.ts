import { Body, Controller, Delete, Get, Param, Post, Put, UnauthorizedException, Header, Req, Headers } from "@nestjs/common";
import { BranchDTO } from "src/application/dto/BranchDTO";
import { BranchApplicationService } from "src/application/service/BranchApplicationService";
import { BranchExceptionHandler } from "src/exceptions/HandlerException";
import { ProductService } from "../service/ProductService";
import { GlobalProductServiceApp } from "src/application/service/GlobalProductServiceApp";
import { BranchProductServiceApp } from "src/application/service/BranchServiceProductApp";

@Controller("branch")
export class BranchController {
    constructor(
        private readonly branchService: BranchApplicationService,
        private readonly service: ProductService,
        private readonly globalProductService: GlobalProductServiceApp,
        private readonly branchProductService: BranchProductServiceApp
    ){}

    @Post()
    public async create(@Body() branchDto: BranchDTO): Promise<BranchDTO>{
        try {
            const newBranch = await this.branchService.create(branchDto);
            return newBranch;
        } catch( error){
            throw BranchExceptionHandler.creationError(error.message);
        }
    }

    @Get()
    public async getAll(): Promise<BranchDTO[]>{
        try{
            const branches = await this.branchService.getAll();
            return branches;
        }catch(error){
            throw BranchExceptionHandler.unknowError(error.message);
        }
    }

    @Get(":id")
    public async getById(@Param("id") id: number): Promise<BranchDTO>{
        try{
            const branch = await this.branchService.getById(id);
            return branch;
        } catch(error){
            throw BranchExceptionHandler.notFound(error.message);
        }
    }

    @Get(":tenantid")
    public async getBytenantid(@Param("tenantid") id: string): Promise<BranchDTO>{
        try{
            const branch = await this.branchService.getBytenantid(id);
            return branch;
        } catch(error){
            throw BranchExceptionHandler.notFound(error.message);
        }
    }


    @Put(":id")
    public async update(@Param("id") id: number, @Body()branchDto: BranchDTO): Promise<BranchDTO>{
        try{
            const branch = new BranchDTO(
                id,
                branchDto.name,
                branchDto.address,
                branchDto.city,
                branchDto.tenantid || "",
                branchDto.password
            );

            const update = await this.branchService.update(id, branch);
            return update;
        } catch(error){
            throw BranchExceptionHandler.updateError(error.message);
        }
    }

    @Delete(":id")
    async delete(@Param("id") id: number): Promise<void> {
      try {
        const existingBranch = await this.branchService.getById(id);
        if (!existingBranch) {
          throw BranchExceptionHandler.notFound();
        }
        await this.branchService.delete(id);

      } catch (error) {
        throw BranchExceptionHandler.deletionError(error.message);
      }
    }

    @Post('products')
    async fetchToMs(@Req() req, @Body() requestProduct: any): Promise<any> {

        const tenantId = req.user.tenantid;

        if (!tenantId) {
            return { message: "No se encontró el tenantId en el token" };
        }

        const products = await this.service.getProductsFromMsProducts(requestProduct);

        if (!products || products.length === 0) {
            return { message: "No se encontraron productos" };
        }

        const registeredProducts = await this.globalProductService.registerProductos(products, tenantId);
        
        setTimeout( async ()=>{
            for (const product of products) {
                await this.branchProductService.registerBranchProduct(product.id, tenantId, product.stock);
            }
        },2000)

        return { message: "Productos obtenidos, almacenados y asociados correctamente a la sucursal", data: registeredProducts };
    }
} 