import { Body, Controller, Post, Request } from "@nestjs/common";
import { GlobalProductDTO } from "src/application/dto/GlobalProductDTO";
import { GlobalProductServiceApp } from "src/application/service/GlobalProductServiceApp";

@Controller("products")
export class GlobalProductController {
    constructor(
      private readonly productService: GlobalProductServiceApp
    ){}

    @Post()
    async registerProducts(@Body() products: GlobalProductDTO[], @Request() req) {
      const tenantId = req.user.tenant_id;
      return this.productService.registerProductos(products, tenantId);
    }    
}
