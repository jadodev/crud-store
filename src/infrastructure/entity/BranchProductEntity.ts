import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { GlobalProductEntity } from './GlobalproductEntity';
import { BranchEntity } from './BranchEntity';

@Entity({ name: 'branch_products' })
export class BranchProductEntity {

  @PrimaryColumn({ type: 'uuid' })
  tenant_id: string;

  @PrimaryColumn()
  product_id: number;

  @ManyToOne(() => BranchEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'tenant_id', referencedColumnName: 'tenant_id' })  
  tenant: BranchEntity;

  @ManyToOne(() => GlobalProductEntity, { eager: true })
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
  product: GlobalProductEntity;

  @Column()
  quantity: number;
}