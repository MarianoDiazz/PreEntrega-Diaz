import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { Box, Button, Container, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';

const Cart = () => {
    const { cart, totalPrice, clearCart } = useContext(CartContext);
    const handleRemoveFromCart = (productId) => {
        const confirmRemove = window.confirm("¿Estás seguro de que deseas eliminar este producto del carrito?");
    };

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
                            <Th>Eliminar</Th>
                        </Tr>
                    </Thead>

                    <Tbody>
                        {cart.map((p) => (
                            <Tr key={p.id}>
                                <Td>{p.titulo}</Td>
                                <Td>${p.precio}</Td>
                                <Td>{p.contador}</Td>
                                <Td>${p.precio * p.contador}</Td>
                                <Td>
                                    <Button onClick={() => handleRemoveFromCart(p.id)}>
                                        Eliminar
                                    </Button>
                                </Td>
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
                    <Button mt={4} bg="green.400">
                        <Link to={"/form"}>Continuar</Link >
                    </Button>
                </>
            )}
        </Container>
    );
};

export default Cart;
