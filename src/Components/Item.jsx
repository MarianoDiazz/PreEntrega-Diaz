import React from 'react'
import { Card, CardBody, Heading, Image, Stack, Text, Divider, CardFooter, Button, ButtonGroup, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ titulo, descripcion, precio, imagen, categoria,id }) => {
    return (
        <div>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src={imagen}
                        alt={descripcion}
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{titulo}</Heading>
                        <Text>
                            {descripcion}
                        </Text>
                        <Text color="teal.700" fontWeight="bold">
                            {categoria}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
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