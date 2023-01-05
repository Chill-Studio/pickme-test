import { Product } from "../product/product-interface.store";



export interface CartProduct {
    product: Product,
    quantity: number
}
export interface CartSlice {
    products: {
        [id:string]: CartProduct
    }
}
