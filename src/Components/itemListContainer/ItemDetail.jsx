import { ChevronRightIcon } from '@chakra-ui/icons'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Card, CardBody, CardFooter, Container, Heading, Image, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = ({ item }) => {

    return (
        <Container maxW='960px' my="40px" >
            <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>


                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>{item.categoria}</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                justify="center"
                mt="10px"
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '400px' }}
                    src={item.imagen}
                    alt={item.descripcion}
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'>{item.titulo}</Heading>

                        <Text py='2'>
                            {item.descripcion}
                        </Text>
                        <Text fontSize="1.2rem" fontWeight="bold" color="teal.400">Precio: $ {item.precio}</Text>
                    </CardBody>

                    <CardFooter>
                        <ItemCount />
                    </CardFooter>
                </Stack>
            </Card>
        </Container>
    )
}

export default ItemDetail