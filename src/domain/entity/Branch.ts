export class Branch {
    id: number;
    name: string;
    address: string;
    city:string;

    constructor(id: number, name: string, address: string, city:string) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.city = city;
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

    public setName(name: string): void {
        this.name = name;
    }

    public setAddress(address: string): void {
        this.address = address;
    }

    public setCity(city: string): void{
        this.city = city;
    }
}