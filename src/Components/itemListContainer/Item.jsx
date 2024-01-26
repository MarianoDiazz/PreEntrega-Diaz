import React from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Image,
    Stack,
    Text,
    Divider,
} from '@chakra-ui/react';

const Item = ({ titulo, categoria, precio, imagen, id }) => {
    return (
        <Box margin="5px">
            <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
                <Card
                    maxW="sm"
                    bgColor="#F1EFE7"
                    color="black"
                    boxShadow="md"
                    borderRadius="lg"
                    transition="transform 0.2s"
                    _hover={{ transform: 'scale(1.02)', boxShadow: '2px 5px 7px -3px rgba(0,0,0,0.59)' }}
                >
                <Image src={imagen} alt={titulo} borderRadius="lg" />
                <CardBody>
                    <Stack mt="4" spacing="2">
                        <Heading size="md">{titulo}</Heading>
                        <Text fontSize="sm" color="gray.600">
                            Categoría: {categoria}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter justify="center">
                    <Text fontSize="xl" fontWeight="bold" color="teal.500">
                        ${precio}
                    </Text>
                </CardFooter>
            </Card>
        </Link>
        </Box >
    );
};

export default Item;
