# PickMe Technical Test

Anaïs Galisson's technical test ([LinkedIn Profile](https://www.linkedin.com/in/anais-galisson-a224b5a7/))

## GETTING STARTED

#### INSTALLATION

```shell
yarn
```

#### START

```shell
yarn dev
```

## STATE MANAGEMENT

I use [Hookstate](https://hookstate.js.org/)

#### Hookstate files:

```shell
     src/store/
          cart // Cart slice
               use-cart.store.ts // contain all set, get and fetch hooks
               cart-inital.store.ts // contain initial state
               cart-interface.store.ts // contain interfaces of cart slice
          product // Product slice
               use-product.store.ts
               product-inital.store.ts
               product.interface.ts
```

#### How to get value from slice

We want to get `productList` from the following store:

```shell
     {
          PRODUCT: {
          productList: [
               {
               product_brand: 'sneaker company',
               product_name: 'fall limited edition sneakers',
               product_description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
               product_discount: 0.5,
               product_price: 250,
               currency: 'dollar'
               }
          ]
          },
          CART:[]
     }
```

We have to create the `getProducList`in `~/store/product/use-product.store`

```shell
export const useProduct = () => {
  const productSlice = useHookstate(store.PRODUCT);

  return {
    /* SELECTORS */
    getProductList: () => productSlice.get().productList,
  };
};
```

To use the productList :

```shell
import { useProduct } from "~/store/product/product-hook.store"

const {getProducList} = useProduct()

getProducList() // It returns the productionList

```

## STYLE AND COMPONENT LIBRARY

I use [ChakraUi](https://chakra-ui.com/)

## INTERNATIONALIZATION (coonfigured but not used)

I use [i18next](https://www.i18next.com/)

Translation folders and files :

```shell
     locales
          en
               home.json
          fr
               home.json
```

## PROCESS.ENV

To type process.env go in `/typings/vite-env.d.ts`
