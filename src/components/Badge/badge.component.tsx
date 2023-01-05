import { Center, useTheme, Heading, Text, TextProps } from "@chakra-ui/react";

interface Props {
    text?: string | number
    textColor?: string
    badgeColor?: string
    textProps?: TextProps
}

const Badge = ({ badgeColor, text, textColor, textProps }: Props) => {
    const theme = useTheme()

    return <Center borderRadius={8} bg={badgeColor || theme.colors.orangePale} pl='2' pr='2' pb='1' pt='1'>
        <Heading fontSize={16} color={textColor || theme.colors.orange}><Text {...textProps} >{text}</Text></Heading>
    </Center>
}

export { Badge };