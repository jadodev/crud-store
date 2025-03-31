import { GlobalProduct } from "./GlobalProduct";

export class BranchProduct{
    constructor(
        public readonly tenant_id: string,
        public readonly product_id: number,
        public quantity: number,
        public readonly product?: GlobalProduct
    ){}
}