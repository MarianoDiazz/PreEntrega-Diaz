import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Heading,
    Image,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    VStack,
} from '@chakra-ui/react';
import Swal from 'sweetalert2';
import { FaTrash } from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const { cart, totalPrice, clearCart, removeFromCart, updateQuantity } = useContext(CartContext);
    const selectedTalle = cart.length > 0 ? cart[0].selectedTalle : null;
    const filteredCart = selectedTalle ? cart.filter((item) => item.selectedTalle === selectedTalle) : cart;
    const handleRemoveFromCart = (productId, productName) => {
        Swal.fire({
            title: `¿Estás seguro de eliminar "${productName}" del carrito?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
        }).then((result) => {
            if (result.isConfirmed) {
                removeFromCart(productId);
                Swal.fire('Eliminado', `"${productName}" ha sido eliminado del carrito.`, 'success');
            }
        });
    };

    const handleClearCart = () => {
        Swal.fire({
            title: '¿Estás seguro de vaciar el carrito?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, vaciar',
        }).then((result) => {
            if (result.isConfirmed) {
                clearCart();
                Swal.fire('Carrito vaciado', 'Tu carrito ha sido vaciado correctamente.', 'success');
            }
        });
    };

    const handleUpdateQuantity = (productId, newQuantity, productName) => {
        if (newQuantity < 1) {
            Swal.fire({
                title: `¿Estás seguro de eliminar "${productName}" del carrito?`,
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, eliminar',
            }).then((result) => {
                if (result.isConfirmed) {
                    removeFromCart(productId);
                    Swal.fire('Eliminado', `"${productName}" ha sido eliminado del carrito.`, 'success');
                }
            });
        } else {
            updateQuantity(productId, newQuantity);
        }
    };

    return (
        <Container maxWidth="container.xl" minH="75vh">
            <Heading textAlign="center" my="3rem">
                Mi compra
            </Heading>

            {cart.length > 0 ? (
                <div className="table-container">
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>Producto</Th>
                                <Th>Talle</Th>
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
                                    <Td>{p.selectedTalle}</Td>
                                    <Td>${p.precio}</Td>
                                    <Td>
                                        <ButtonGroup>
                                            <Button onClick={() => handleUpdateQuantity(p.id, p.contador - 1, p.titulo)}>-</Button>
                                            <Button>{p.contador}</Button>
                                            <Button onClick={() => handleUpdateQuantity(p.id, p.contador + 1, p.titulo)}>+</Button>
                                        </ButtonGroup>
                                    </Td>
                                    <Td>${(p.precio * p.contador).toFixed(3)}</Td>
                                    <Td>
                                        <Button bg="red.400" onClick={() => handleRemoveFromCart(p.id, p.titulo)}>
                                            <FaTrash />
                                        </Button>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </div>
            ) : (
                <Box textAlign="center" p={8}>
                    <Text fontWeight="bold" fontSize="lg">
                        Aún no has agregado nada al carrito.
                    </Text>
                </Box>
            )}

            {cart.length > 0 && (
                <Box mt={4} display="flex" justifyContent="space-between" alignItems="center">
                    <Box>
                        <Button as={Link} to="/" colorScheme="teal" variant="outline" mr={4}>
                            Continuar comprando
                        </Button>
                        <Button colorScheme="red" variant="outline" onClick={handleClearCart}>
                            Vaciar carrito
                        </Button>
                    </Box>
                    <Box textAlign="right">
                        <Text fontSize="lg" fontWeight="bold">
                            Total de la compra: $ {totalPrice().toFixed(3)}
                        </Text>
                        <Button as={Link} to="/form" colorScheme="teal" mt={4}>
                            Finalizar compra
                        </Button>
                    </Box>
                </Box>
            )}
        </Container>
    );
};

export default Cart;
