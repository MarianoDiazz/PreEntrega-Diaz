import React from 'react'
import { Card, CardBody, Heading, Image, Stack, Text, Divider, CardFooter, Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ titulo, descripcion, precio, imagen, categoria, id }) => {
    return (
        <div>
            <Card maxW='sm' bg="blue.200">
                <CardBody>
                    <Image
                        src={imagen}
                        alt={descripcion}
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3' minH="200px" justify="space-between">
                        <Heading size='md'>{titulo}</Heading>
                        <Text>
                            {descripcion}
                        </Text>
                        <Text color="teal.700" fontWeight="700">
                            Categoria: {categoria}
                        </Text>
                        <Text color='blue.900' letterSpacing="1.5px" fontFamily="fantasy" fontSize='2xl'>
                            ${precio}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            <Link to={`/product/${id}`}>Ver mas
                            </Link>
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                            Add to cart
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Item