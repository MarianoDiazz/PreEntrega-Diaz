import { Box, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const CarWidget = () => {
    const itemCount = 0;


    return (
        <Box p="5px" mr="20px">

            <Icon as={FiShoppingCart} fontSize="2rem" />
            <Text position="absolute" top="10" right="3" fontSize="20px" fontWeight="bold" bg="teal.300" p="2px" borderRadius="30px">{itemCount}</Text>
        </Box>

    );
};

export default CarWidget;
