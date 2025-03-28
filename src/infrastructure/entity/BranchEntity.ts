import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('branch')
export class BranchEntity {

    @PrimaryGeneratedColumn('uuid')
    tenant_id: string;
  
    @Column({ unique: true })
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    address: string;
  
    @Column()
    city: string;
  
    @Column()
    password: string;

    constructor(id: number, name: string, address: string, city: string, tenant_id: string, password: string) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.city = city;
        this.tenant_id = tenant_id;
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

    public getCity(): string {
        return this.city;
    }

    public gettenantid(): string {
        return this.tenant_id;
    }

    public getPassword(): string{
        return this.password;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setAddress(address: string): void {
        this.address = address;
    }

    public setCity(city: string): void {
        this.city = city;
    }
}