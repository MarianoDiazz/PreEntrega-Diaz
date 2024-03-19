import { Box, Icon, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { CartContext } from '../../context/CartContext';

const CarWidget = () => {
    const { quantityInCart } = useContext(CartContext)

    return (
        <Box p="5px" mr="20px">
            <Icon as={FiShoppingCart} fontSize="2rem" />
            <Text fontSize="20px" display="inline-block" w='1.5rem' textAlign='center' fontWeight="bold" bg="teal.300" p="px" borderRadius="50%">{quantityInCart()}</Text>
        </Box>

    );
};

export default CarWidget;
