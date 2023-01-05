import { devtools } from '@hookstate/devtools';
import { hookstate } from '@hookstate/core';
import { PRODUCT_INITIAL_STATE } from './product/product-initial.store';
import { CART_INITIAL_STATE } from './cart/cart-inital.store';
import {  CartSlice } from './cart/cart-interface.store';
import {  ProductSlice } from './product/product-interface.store';

export interface Store {
  PRODUCT: ProductSlice;
  CART: CartSlice;
}

/* STORE CREATION */
export const store = hookstate<Store>(
    { PRODUCT: PRODUCT_INITIAL_STATE, CART: CART_INITIAL_STATE }, 
    devtools({ key: 'store' }));
