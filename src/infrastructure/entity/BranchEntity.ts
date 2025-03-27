import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('branch')
export class BranchEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    address: string;
  
    @Column()
    city: string;

    @Column({ type: 'uuid', unique: true })
    tenantid: string;

    @Column()
    password: string;

    constructor(id: number, name: string, address: string, city: string, tenantid: string, password: string) {
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

    public getCity(): string {
        return this.city;
    }

    public gettenantid(): string {
        return this.tenantid;
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