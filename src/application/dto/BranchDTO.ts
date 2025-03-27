import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class BranchDTO {
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsString()
    @IsNotEmpty()
    city:string;

    @IsUUID()
    tenantid?: string;

    password: string;

    constructor(id: number, name: string, address: string, city:string, tenantid: string, password: string) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.city = city;
        this.tenantid = tenantid;
        this.password = password;
    }

    public getId(): number {
        return this.id;
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
    
    public gettenantid(): string | undefined {
        return this.tenantid;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setAddress(address: string): void {
        this.address = address;
    }

    public setCity(city: string): void{
        this.city = city;
    }

    public setPassword( password: string): void {
        this.password = password;
    }
}