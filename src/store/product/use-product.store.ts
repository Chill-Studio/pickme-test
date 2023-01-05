import { useHookstate } from '@hookstate/core';
import { GetProduct, ProductSlice } from './product-interface.store';
import { store } from '../index.store';
import axios from 'axios';

// Product data store
export const useProduct = () => {
  const productSlice = useHookstate(store.PRODUCT);

  return {
    /* ACTIONS */
    set: (_productSlice: ProductSlice ) => {
      productSlice.set(_productSlice);
    },

    fetchProductList: async () => {
        const productList = (await axios.get<GetProduct["request"], GetProduct["response"]>(`${process.env.VITE_API_BASE_URL}/products`)).data
        productSlice.productList.set(productList)
      },
    
    /* SELECTORS */
    get: () => productSlice.get(),
  };
};
