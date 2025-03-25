import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BranchDTO } from "src/application/dto/BranchDTO";
import { BranchApplicationService } from "src/application/service/BranchApplicationService";
import { BranchExceptionHandler } from "src/exceptions/HandlerException";

@Controller("branch")
export class BranchController {
    constructor(
        private readonly branchService: BranchApplicationService
    ){}

    @Post()
    public async create(@Body() branchDto: BranchDTO): Promise<BranchDTO>{
        try {
            const newBranch = await this.branchService.create(branchDto);
            console.log(newBranch);
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

    @Put(":id")
    public async update(@Param("id")id:number, @Body()branchDto: BranchDTO): Promise<BranchDTO>{
        try{
            const branch = new BranchDTO(
                id,
                branchDto.name,
                branchDto.address,
                branchDto.city
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
} 