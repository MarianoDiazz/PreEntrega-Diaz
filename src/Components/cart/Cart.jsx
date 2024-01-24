import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { Box, Button, Container, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import Swal from 'sweetalert2';
import { FaTrash } from 'react-icons/fa';
const Cart = () => {
    const { cart, totalPrice, clearCart, removeFromCart, updateQuantity } = useContext(CartContext);

    const handleRemoveFromCart = (productId, productName) => {
        Swal.fire({
            title: `¿Estás seguro de eliminar "${productName}" del carrito?`,
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, eliminar",
        }).then((result) => {
            if (result.isConfirmed) {
                removeFromCart(productId);
                Swal.fire("Eliminado", `"${productName}" ha sido eliminado del carrito.`, "success");
            }
        });
    };

    const handleClearCart = () => {
        Swal.fire({
            title: "¿Estás seguro de vaciar el carrito?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, vaciar",
        }).then((result) => {
            if (result.isConfirmed) {
                clearCart();
                Swal.fire("Carrito vaciado", "Tu carrito ha sido vaciado correctamente.", "success");
            }
        });
    };

    const handleUpdateQuantity = (productId, newQuantity, productName) => {
        if (newQuantity < 1) {
            Swal.fire({
                title: `¿Estás seguro de eliminar "${productName}" del carrito?`,
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sí, eliminar",
            }).then((result) => {
                if (result.isConfirmed) {
                    removeFromCart(productId);
                    Swal.fire("Eliminado", `"${productName}" ha sido eliminado del carrito.`, "success");
                }
            });
        } else {
            updateQuantity(productId, newQuantity);
        }
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
                                <Td>${p.precio.toFixed(3)}</Td>
                                <Td>
                                    <Button onClick={() => handleUpdateQuantity(p.id, p.contador - 1, p.titulo)}>-</Button>
                                    {p.contador}
                                    <Button onClick={() => handleUpdateQuantity(p.id, p.contador + 1, p.titulo)}>+</Button>
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
            ) : (
                <Box textAlign="center" p={8}>
                    <Text fontWeight="bold" fontSize="lg">
                        Aún no has agregado nada al carrito.
                    </Text>
                </Box>
            )}
            {cart.length > 0 && (
                <>
                    <Text fontSize={20} fontWeight={500} mt={4}>Total de la compra: $ {totalPrice().toFixed(3)}</Text>
                    <Button mt={4} onClick={handleClearCart}>
                        Vaciar carrito
                    </Button>
                    <Button mt={4} bg="green.400">
                        <Link to={"/form"}>Continuar</Link>
                    </Button>
                </>
            )}
        </Container>
    );
};

export default Cart;
