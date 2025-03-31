import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { BranchProductEntity } from './BranchProductEntity';

@Entity({ name: 'global_products' })
export class GlobalProductEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('text', { array: true })
  category: string[];

  @Column('decimal')
  price: number;

  @Column("text", { array: true, default: [] })
  images: string[];

  @OneToMany(() => BranchProductEntity, (branchProduct) => branchProduct.product)
    branchProducts: BranchProductEntity[];
}
