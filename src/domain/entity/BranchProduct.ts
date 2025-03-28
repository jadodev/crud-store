import { GlobalProduct } from "./GlobalProduct";

export class BranchProduct{
    constructor(
        public readonly tenantId: string,
        public readonly productId: number,
        public quantity: number,
        public readonly product?: GlobalProduct
    ){}
}