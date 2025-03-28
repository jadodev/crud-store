import { GlobalProductDTO } from "./GlobalProductDTO";

export class BranchProductDTO{
    constructor(
        public readonly tenantId: string,
        public readonly productId: number,
        public quantity: number,
        public readonly product?: GlobalProductDTO
    ){}
}