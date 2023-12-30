import { Button, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const ItemCount = () => {
  const [contador, setContador] = useState(1)
  const sumar = () => {
    setContador(contador + 1)
  }

  const restar = () => {
    if (contador >= 1) {
      setContador(contador - 1)
    }
  }
  return (
    <Flex gap="5px" align="center">
      <Button bg="red.400" onClick={restar}>-</Button>
      <Button variant='solid'>
        Add {contador} productos
      </Button>
      <Button bg="green.400" onClick={sumar}>+</Button>
    </Flex>
  )
}

export default ItemCount