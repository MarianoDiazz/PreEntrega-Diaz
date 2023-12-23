import React from 'react'
import { Flex, Spacer, Box, Center, Button, Heading, Menu, MenuItem, MenuList, MenuButton } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import CarWidget from '../cart/CarWidget'
import { Link } from 'react-router-dom'
import logo from "../navBar/logo.png"
const NavBar = () => {
    return (
        <div>
            <Flex bgColor="#F1EFE7" align='center' >
                <Box maxW="200px">
                    <Link to={"/"}>
                        <img src={logo} alt="logo ecommerce react" />
                    </Link>
                </Box>
                <Spacer />
                <Box>
                    <Menu>
                        <MenuButton bg="blue.200" as={Button} rightIcon={<ChevronDownIcon />}>
                            Categorias
                        </MenuButton>
                        <MenuList>
                            <Link to={"/categorias/remeras"}>
                                <MenuItem>
                                    Remeras
                                </MenuItem>
                            </Link>
                            <Link to={"/categorias/zapatillas"}>
                                <MenuItem>
                                    Zapatillas
                                </MenuItem>
                            </Link>
                            <Link to={"/categorias/buzos"}>
                                <MenuItem>
                                    Buzos
                                </MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box>
                    <Link to={"/cart"}>
                        <CarWidget />
                    </Link>
                </Box>
                
            </Flex>
        </div>
    )
}

export default NavBar
