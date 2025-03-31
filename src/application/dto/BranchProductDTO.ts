import { GlobalProductDTO } from "./GlobalProductDTO";

export class BranchProductDTO{
    constructor(
        public readonly tenant_id: string,
        public readonly product_id: number,
        public quantity: number,
        public readonly product?: GlobalProductDTO
    ){}
}