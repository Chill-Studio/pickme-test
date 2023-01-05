import { AddIcon, MinusIcon } from "@chakra-ui/icons"
import { Text, Flex, IconButton, useTheme, Center, Heading } from "@chakra-ui/react"


interface Props {
    value: number
    onIncreaseValue: () => void
    onDecreaseValue: () => void
}

const InputQuantity = ({ value, onIncreaseValue, onDecreaseValue }: Props) => {
    const theme = useTheme()

    return (
        <Flex>
            <IconButton
                disabled={value <= 0}
                backgroundColor={theme.colors.greyLight}
                color={theme.colors.orange}
                aria-label='Search database'
                icon={<MinusIcon />}
                onClick={onDecreaseValue}
            />
            <Center bg={theme.colors.greyLight} pl='5' pr='5'>
                <Heading as="p" fontSize='sm'>{value}</Heading>
            </Center>
            <IconButton
                color={"orange"}
                backgroundColor={theme.colors.greyLight}
                aria-label='Search database'
                icon={<AddIcon />}
                onClick={onIncreaseValue}
            />
        </Flex>)
}

export { InputQuantity }