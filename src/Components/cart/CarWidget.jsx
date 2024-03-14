import { Box, Icon, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { CartContext } from '../../context/CartContext';

const CarWidget = () => {
    const { quantityInCart } = useContext(CartContext)

    return (
        <Box p="5px" mr="20px">
            <Icon as={FiShoppingCart} fontSize="2rem" />
            <Text fontSize="20px" display="inline" fontWeight="bold" bg="red.300" p="2px" borderRadius="15px">{quantityInCart()}</Text>
        </Box>

    );
};

export default CarWidget;
