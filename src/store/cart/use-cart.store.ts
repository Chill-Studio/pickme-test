import { useHookstate } from '@hookstate/core';
import { store } from '../index.store';
import { Product } from '../product/product-interface.store';
import { CartSlice } from './cart-interface.store';


// Every products added in the cart
export const useCart = () => {
  const cart = useHookstate(store.CART);

  return {
    /* ACTIONS */
    set: (_cart: CartSlice) => {
      cart.set(_cart);
    },
    setProductQty: (newProduct: Product, quantity: number) => {
      // Update quantity of existing product
      if(cart.products[newProduct.product_name].get()) {
        cart.products[newProduct.product_name].quantity.set(quantity)
      } else { 
        // Add product if doesn't exist
        cart.products.set({...cart.products.get(),[newProduct.product_name]: { product:newProduct, quantity}})
      }
    },
    getTotalQuantityOfProducts: ()=>{
      return Object.values(cart.products).reduce((acc,product) =>{
        return acc + product.quantity.get()
      },0)
    },
    deleteAllProducts: () => {
        cart.products.set({})
    },
    /* SELECTORS */
    get: () => cart.get(),
  
  };
};
