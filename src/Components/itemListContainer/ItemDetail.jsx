import { ChevronRightIcon } from '@chakra-ui/icons';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Card,
    Spacer,
    Container,
    Heading,
    Image,
    Stack,
    Text,
    VStack,
    Box,
    Button,
    ButtonGroup,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    const [selectedTalle, setSelectedTalle] = useState(null);

    const handleTalleSelect = (talle) => {
        setSelectedTalle(talle);
    };
    console.log(`seleccionaste ${selectedTalle}`);

    return (
        <Container maxW="960px" my="6rem">
            <Breadcrumb spacing="8px" color="teal" fontSize="19px" separator={<ChevronRightIcon/>}>
                <BreadcrumbItem>
                    <BreadcrumbLink fontWeight="600" href="/">
                        Home
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink color="gray.600" href="#">
                        {item.categoria}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Card mt="10px" borderRadius="lg" boxShadow="lg">
                <Stack direction={{ base: 'column', sm: 'row' }}>
                    <Image
                        objectFit="cover"
                        maxW={{ base: '100%', sm: '400px' }}
                        src={item.imagen}
                        alt={item.descripcion}
                        borderTopRadius="lg"
                    />
                    <VStack align="start" spacing="4" p="4" flex="1">
                        <Heading size="lg">{item.titulo}</Heading>
                        <Text fontSize="1.5rem" fontWeight="bold" color="teal.400">
                            Precio: $ {item.precio}
                        </Text>
                        {item.talles && item.talles.length > 0 && (
                            <Box>
                                <Text fontSize="lg" fontWeight="500">
                                    Talles disponibles:
                                </Text>
                                <ButtonGroup spacing="2">
                                    {item.talles.map((talle) => (
                                        <Button
                                            key={talle}
                                            variant={selectedTalle === talle ? 'solid' : 'outline'}
                                            colorScheme="teal"
                                            onClick={() => handleTalleSelect(talle)}
                                        >
                                            {talle}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </Box>
                        )}
                        <Spacer />
                        <Box>
                            <ItemCount item={{ ...item, selectedTalle }} />
                        </Box>
                    </VStack>
                </Stack>
                <Box p="4" mt="10px">
                    <Text fontSize="lg" fontWeight="bold">
                        Descripción:
                    </Text>
                    <Text fontSize="md">{item.descripcion}</Text>
                </Box>
            </Card>
        </Container>
    );
};

export default ItemDetail;