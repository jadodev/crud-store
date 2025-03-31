import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { GlobalProductEntity } from "./GlobalproductEntity";

@Entity("branch_products")
export class ProductEntity {

    @PrimaryColumn({ name: "tenant_id", type: "uuid" })
    tenant_id: string;

    @PrimaryColumn({ name: "product_id", type: "int" })
    product_id: number;

    @Column()
    quantity: number;

    @ManyToOne(() => GlobalProductEntity, (product) => product.branchProducts, { eager: true })
    @JoinColumn({ name: "product_id" })
    product?: GlobalProductEntity;
}
