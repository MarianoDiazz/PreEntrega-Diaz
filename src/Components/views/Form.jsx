import { useState, useEffect, useContext } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Grid,
    GridItem,
    Input,
    Spinner,
    Text,
    useToast,
    Alert,
    AlertIcon,
    Heading
} from '@chakra-ui/react';
import { CartContext } from '../../context/CartContext';

const Form = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [confirmarEmail, setConfirmarEmail] = useState('');
    const [orderId, setOrderId] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();
    const [cartSummary, setCartSummary] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const { clearCart } = useContext(CartContext)

    const db = getFirestore();
    const ordersCollection = collection(db, 'orden');

    useEffect(() => {
        // Obtengo el carrito desde el localStorage
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

        const total = storedCart.reduce((acc, item) => acc + item.precio * item.contador, 0);
        const summary = storedCart.map(item => `${item.titulo} x ${item.contador}`);
        setCartSummary([
            { title: 'Resumen de compra:', content: summary.join(', ') },
            { title: 'Total a pagar:', content: `$${total.toFixed(3)}` },
        ]);
        setTotalPrice(total);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validaciones
        if (!nombre || !apellido || !email || !confirmarEmail) {
            toast({
                title: 'Error',
                description: 'Por favor, complete todos los campos.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
            return;
        }

        if (email !== confirmarEmail) {
            toast({
                title: 'Error',
                description: 'Los correos electrónicos no coinciden.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
            return;
        }

        setIsLoading(true);

        try {
            const productsBuy = JSON.parse(localStorage.getItem('cart')) || [];

            const docRef = await addDoc(ordersCollection, {
                nombre,
                apellido,
                email,
                confirmarEmail,
                productsBuy,
                total: totalPrice,
            });
            setOrderId(docRef.id);
            clearCart();

            toast({
                title: '¡Gracias por tu compra!',
                description: `Tu ID de compra es: ${docRef.id}`,
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
        } catch (error) {
            console.error('Error al procesar la compra:', error);
            toast({
                title: 'Error',
                description: 'Hubo un problema al procesar tu compra. Por favor, inténtalo de nuevo más tarde.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Container maxW="container.xl" mt="6" minH="70vh">
            <Heading textAlign="center" my={8}>Finalizar compra</Heading>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <GridItem colSpan={1}>
                    <Box p={4} borderWidth="1px" borderRadius="lg">
                        {cartSummary.map((section, index) => (
                            <Box key={index}>
                                <Text fontWeight="bold">{section.title}</Text>
                                <Text>{section.content}</Text>
                            </Box>
                        ))}
                    </Box>
                </GridItem>
                <GridItem colSpan={1}>
                    <Box p={4} borderWidth="1px" borderRadius="lg">
                        <form onSubmit={handleSubmit}>
                            <FormControl mb="4">
                                <FormLabel>Nombre</FormLabel>
                                <Input
                                    type="text"
                                    placeholder="Nombre"
                                    onChange={(e) => setNombre(e.target.value)}
                                    value={nombre}
                                />
                            </FormControl>
                            <FormControl mb="4">
                                <FormLabel>Apellido</FormLabel>
                                <Input
                                    type="text"
                                    placeholder="Apellido"
                                    onChange={(e) => setApellido(e.target.value)}
                                    value={apellido}
                                />
                            </FormControl>
                            <FormControl mb="4">
                                <FormLabel>Email</FormLabel>
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </FormControl>
                            <FormControl mb="4">
                                <FormLabel>Confirmar Email</FormLabel>
                                <Input
                                    type="email"
                                    placeholder="Confirmar Email"
                                    onChange={(e) => setConfirmarEmail(e.target.value)}
                                    value={confirmarEmail}
                                />
                            </FormControl>
                            <Button type="submit" colorScheme="teal" disabled={isLoading}>
                                {isLoading ? <Spinner size="sm" /> : 'Enviar'}
                            </Button>
                        </form>
                        {orderId && (
                            <Alert status="success" mt="4">
                                <AlertIcon />
                                ¡Gracias por tu compra! Tu ID de compra es: {orderId}
                            </Alert>
                        )}                    </Box>
                </GridItem>
            </Grid>
        </Container>
    );
};

export default Form;
