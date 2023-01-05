import {  AxiosResponse } from "axios";


export interface ProductSlice{
  productList : Product[]
}
export interface Product {
    product_brand?: string;
    product_name: string;
    product_description?: string;
    product_discount: number;
    product_price: number;
    currency: string;
}


export interface GetProduct {
  request : undefined,
  response : AxiosResponse<Product[]>
}
