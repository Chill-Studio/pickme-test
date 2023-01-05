import { Center, Wrap, WrapItem, Text, Flex, Heading, useTheme, Button, Image } from '@chakra-ui/react'
import { useProduct } from '~/store/product/use-product.store';
import './collection.style.css'
import { useEffect, useState } from 'react';
import { Badge } from '~/components/Badge/badge.component'
import { InputQuantity } from '~/components/InputQuantity/inputQuantity.component';
import cartIcon from "~/assets/icons/cart-white.svg";
import { useCart } from '~/store/cart/use-cart.store';
import { Caroussel } from '~/components/Caroussel/caroussel.component';

/* 
Display Product Details with button to add it to the cart
*/
export function Collection() {
    const productSlice = useProduct();
    const cart = useCart()
    const theme = useTheme()
    const [productQuantity, setProductQuantity] = useState(0)
    const firstProductOfList = productSlice.get().productList[0]

    useEffect(() => {
        productSlice.fetchProductList()
    }, [])

    const submitProductQuantity = () => {
        if (productQuantity > 0) {
            cart.setProductQty({ product_discount: 0.5, product_price: 250, currency: "dollar", product_name: firstProductOfList.product_name }, productQuantity)
        }
    }
    const increaseProductQuantity = () => {
        setProductQuantity(productQuantity + 1)
    }

    const decreaseProductQuantity = () => {
        productQuantity > 0 && setProductQuantity(productQuantity - 1)
    }

    if (firstProductOfList) {

        const discountPrice = (firstProductOfList.product_price * firstProductOfList.product_discount).toFixed(2)

        const discountPercentage = firstProductOfList.product_discount * 100


        return <Wrap mt='90' justify='center'>
            <WrapItem>
                <Center w='400px' h={530} >
                    <Caroussel />
                </Center>
            </WrapItem>
            <WrapItem>
                <Flex w='400px' h={[250, 400, 530]} p='3' justifyContent={'center'} flexDirection='column'>
                    <Heading mb='3' textTransform={'uppercase'} color={theme.colors.orange} fontSize='xs'>{firstProductOfList.product_brand}</Heading>
                    <Heading mb='3' textTransform={'capitalize'} fontSize='4xl' >{firstProductOfList.product_name}</Heading>
                    <Text mb='3' color={theme.colors.greyDark} fontSize='sm' >{firstProductOfList.product_description}</Text>
                    <Flex alignItems={'center'}>
                        <Heading fontSize='lg' mr='5'>${discountPrice}</Heading>
                        <Badge text={discountPercentage + "%"} />
                    </Flex>
                    <Text mb='3' color={theme.colors.grey} fontFamily='Kumbh Sans Bold' fontSize='sm' textDecoration={"line-through"}>${firstProductOfList.product_price.toFixed(2)}</Text>
                    <Wrap alignItems={'center'}>
                        <WrapItem>
                            <InputQuantity value={productQuantity} onDecreaseValue={decreaseProductQuantity} onIncreaseValue={increaseProductQuantity} />
                        </WrapItem>
                        <WrapItem>
                            <Button disabled={productQuantity === 0} onClick={submitProductQuantity} leftIcon={<Image src={cartIcon} />} bg={theme.colors.orangeLight} borderRadius={7} width='200px'>
                                <Text color='white' fontSize="sm">Add to cart</Text>
                            </Button>
                        </WrapItem>
                    </Wrap>
                </Flex>
            </WrapItem>
        </Wrap >
    } else {
        return <>Loading...</>
    }

}
