import React from 'react'
import { Flex, Spacer, Box, Center, Button, Heading, Menu, MenuItem, MenuList, MenuButton } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import CarWidget from './CarWidget'
import { Link } from 'react-router-dom'
import  logo  from "../Components/img/logo.png"
const NavBar = () => {
    return (
        <div>
            <Flex bgColor="#F1EFE7" justify='space-between' align='center' >
                <Box w="200px">
                    <Link to={"/"}>
                        <img src={logo} alt="" />
                    </Link>
                </Box>
                <Spacer />
                <Box>

                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            Categorias
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                <Link to={"/categorias/remeras"}>Remeras</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to={"/categorias/zapatillas"}>Zapatillas</Link>
                            </MenuItem>
                            <MenuItem>
                            <Link to={"/categorias/buzos"}>Buzos</Link>
                            </MenuItem>
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
