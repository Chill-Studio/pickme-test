import { DeleteIcon } from "@chakra-ui/icons"
import { Box, Button, Center, Flex, Text, useTheme } from "@chakra-ui/react"
import { useCart } from "~/store/cart/use-cart.store"

interface Props {
}

export const Cart = ({ }: Props) => {
    const cart = useCart()
    const { products } = useCart().get()
    const theme = useTheme()

    const renderFilledCart = () => {

        return Object.keys(products).map(productName => {
            const { quantity, product } = products[productName]
            const priceProduct = (product.product_price * product.product_discount).toFixed(2)
            const priceTotal = (quantity * parseInt(priceProduct)).toFixed(2)
            return (
                <Flex p='4' key={productName}>
                    <Box flex='5'>
                        <Text textTransform={'capitalize'} color={theme.colors.greyDark} >{productName}</Text>
                        <Flex>
                            <Text color={theme.colors.greyDark} >${priceProduct}  x{quantity} </Text>
                            <Text pl='2' fontFamily={theme.fonts.heading}>${priceTotal}</Text>
                        </Flex>
                    </Box>
                    <Center flex='1' onClick={cart.deleteAllProducts}>
                        <DeleteIcon color={theme.colors.grey} />
                    </Center>
                </Flex >
            )
        });
    }

    const emptyCart = (
        <Center m='10'>
            <Text>You cart is empty</Text>
        </Center>
    )

    return (<Box>
        {cart.getTotalQuantityOfProducts() === 0 ? emptyCart : renderFilledCart()}
        <Center mb='4'>
            <Button
                bg={theme.colors.orange}
                w='90%'
                textColor='white'
            >
                Checkout
            </Button>
        </Center>
    </Box>)
}
