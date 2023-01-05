
import {
    Flex,
    Box,
    Spacer,
    Image,
    Divider,
    Avatar,
    useMediaQuery,
    Drawer,
    DrawerOverlay,
    DrawerBody,
    DrawerContent,
    useTheme,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    Heading,
} from '@chakra-ui/react'
import logoImage from "~/assets/images/logo.svg";
import cartIcon from "~/assets/icons/cart.svg";
import closeIcon from "~/assets/icons/close.svg";
import avatar from "~/assets/images/avatar.png";
import { Link, NavLink } from "react-router-dom";
import { HamburgerIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import './header.style.css'
import { Cart } from '../Cart/cart.container';
import { useCart } from '~/store/cart/use-cart.store';
import { Badge } from '~/components/Badge/badge.component';

/**
 * Header containing: Menu, Account and Cart
 */
const Header = () => {

    const [isLargeScreen] = useMediaQuery('(min-width: 800px)')
    const [isDrawerOpened, setIsDrawerOpened] = useState(false)
    const theme = useTheme()
    const { getTotalQuantityOfProducts } = useCart()
    const totalQtyOfProducts = getTotalQuantityOfProducts()
    const logo = (
        <Box alignItems={'center'} justifyContent='right' display='flex' pr='10'>
            <Image src={logoImage} />
        </Box >
    )


    const drawerIcon = (
        <Box alignItems={'center'} justifyContent='right' display='flex' pr='10' onClick={() => { setIsDrawerOpened(true) }}>
            <HamburgerIcon />
        </Box >
    )


    const menuStyle = (isActive: boolean) => {
        const activeStyle = {
            textDecoration: "underline",
            textUnderlineOffset: 30,
            textDecorationThickness: '5px',
            textDecorationColor: theme.colors.orange
        };

        return isActive ? activeStyle : undefined
    }

    const menu = (
        <Flex w='md' pl='10' pr='10' alignItems={'center'} justifyContent={'left'}>
            <NavLink to={'/collections'} style={({ isActive }) => menuStyle(isActive)}> Collections</NavLink>
            <Spacer />
            <NavLink to={'/men'} style={({ isActive }) => menuStyle(isActive)}>Men</NavLink>
            <Spacer />
            <NavLink to={'/women'} style={({ isActive }) => menuStyle(isActive)}>Women</NavLink>
            <Spacer />
            <NavLink to={'/about'} style={({ isActive }) => menuStyle(isActive)}>About</NavLink>
        </Flex >
    )


    const account = (
        <Flex w='150px' alignItems='center' justifyContent='space-around'>
            <Popover>
                <PopoverTrigger>
                    <Box>
                        <Box position={"absolute"} top='3' ml="5" >
                            {totalQtyOfProducts > 0 && <Badge
                                text={totalQtyOfProducts.toString()}
                                textColor="white"
                                badgeColor={theme.colors.orange}
                                textProps={{ fontSize: 12, fontFamily: theme.fonts.heading }}
                            />}
                        </Box>
                        <Image src={cartIcon} />
                    </Box>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverHeader><Heading fontSize={16}>Cart</Heading></PopoverHeader>
                    <Cart />
                </PopoverContent>
            </Popover>
            <Avatar src={avatar} h='10' w='10' />
        </Flex >
    )


    const drawerMenu = (
        <Drawer placement='left' onClose={() => setIsDrawerOpened(false)} isOpen={isDrawerOpened}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerBody>
                    <Image src={closeIcon} boxSize='20px' mt="10px" />
                    <Flex flexDirection="column" mt="10px">
                        <Link to={'/collections'} onClick={() => setIsDrawerOpened(false)} className="link">Collections</Link>
                        <Link to={'/men'} onClick={() => setIsDrawerOpened(false)} className="link">Men</Link>
                        <Link to={'/women'} onClick={() => setIsDrawerOpened(false)} className="link">Women</Link>
                        <Link to={'/about'} onClick={() => setIsDrawerOpened(false)} className="link">About</Link>
                    </Flex>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )


    return (
        <>
            <Flex h='20' pr={[5, 20, 150]} pl={[5, 20, 150]}>
                {!isLargeScreen && drawerIcon}
                {logo}
                {isLargeScreen ? menu : drawerMenu}
                <Spacer />
                {account}
            </Flex >
            <Flex alignItems='center' justifyContent='center'>
                <Divider w='80%' />
            </Flex>
        </>
    )
};

export { Header };
