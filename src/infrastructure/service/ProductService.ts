import { Injectable } from "@nestjs/common";
import { RequestServiceError } from "src/exceptions/HandlerException";

@Injectable()
export class ProductService {
    private readonly PRODUCTS_URL = process.env.PRODUCTS_URL || 'http://localhost:8080/products/request'; 

    async getProductsFromMsProducts(resquestData: any):Promise<any>{
        try{
            const response = await fetch(this.PRODUCTS_URL,{
                method:'POST',
                headers:{
                    'Content-Type' : 'application/json',
                    'Authorization' : `Bearer ${resquestData.token}`
                },
                body: JSON.stringify(resquestData),
            });

            if(!response.ok){
                throw RequestServiceError.RequestError();
            }

            const data = await response.json();
                console.log(data)
            return data;
        }catch (error){
            console.log("Error en la peticion")
            return error;
        }
    }
}