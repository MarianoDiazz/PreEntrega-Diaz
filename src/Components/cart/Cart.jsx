import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Box, Button, Container, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';

const Cart = () => {
    const { cart, totalPrice, clearCart } = useContext(CartContext);

    return (
        <Container maxWidth="container.xl">
            {cart.length > 0 ? (
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Producto</Th>
                            <Th>Precio</Th>
                            <Th>Cantidad</Th>
                            <Th>Precio total</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {cart.map((p) => (
                            <Tr key={p.id}>
                                <Td>{p.titulo}</Td>
                                <Td>${p.precio}</Td>
                                <Td>{p.contador}</Td>
                                <Td>${p.precio * p.contador}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            ) : (
                <Box textAlign="center" p={8}>
                    <Text fontWeight="bold" fontSize="lg">
                        Aún no has agregado nada al carrito.
                    </Text>
                </Box>
            )}
            {cart.length > 0 && (
                <>
                    <Text fontSize={20} fontWeight={500} mt={4}>Total de la compra: $ {totalPrice()}</Text>
                    <Button mt={4} onClick={clearCart}>
                        Vaciar carrito
                    </Button>
                </>
            )}
        </Container>
    );
};

export default Cart;
