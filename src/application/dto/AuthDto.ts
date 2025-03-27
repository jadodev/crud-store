import { IsNotEmpty, IsString } from "class-validator";

export class LoginDTO {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsString()
    @IsNotEmpty()
    city:string;

    password: string;

    
    constructor(name: string, address: string, city:string, password: string) {
        this.name = name;
        this.address = address;
        this.city = city;
        this.password = password;
    }


    public getName(): string {
        return this.name;
    }

    public getAddress(): string {
        return this.address;
    }

    public getCity():string {
        return this.city;
    }

    public getPassword(): string {
        return this.password;
    }

    // public setName(name: string): void {
    //     this.name = name;
    // }

    // public setAddress(address: string): void {
    //     this.address = address;
    // }

    // public setCity(city: string): void{
    //     this.city = city;
    // }

    // public setPassword( password: string): void {
    //     this.password = password;
    // }
}
