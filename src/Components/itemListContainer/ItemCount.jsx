import { Button, Flex } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';

const ItemCount = ({ item }) => {

  const { cart, setCart } = useContext(CartContext)
  console.log(cart);
  const [contador, setContador] = useState(1)

  function agregarItem() {
    const itemAgregado = { ...item, contador };
    const newCart = [...cart];

    const isInCart = newCart.findIndex((p) => p.id === itemAgregado.id);

    if (isInCart !== -1) {
      newCart[isInCart].contador += contador;

      console.log("Actualizado en el carrito");
    } else {
      newCart.push(itemAgregado)
      console.log("Agregado al carrito");
    }
    setCart(newCart);
  }
  const sumar = () => {
    setContador(contador + 1)
  }

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1)
    }
  }
  return (
    <Flex gap="5px" align="center">
      <Button bg="red.400" onClick={restar}>-</Button>
      <Button variant='solid' onClick={agregarItem}>
        Agregar {contador} productos
      </Button>
      <Button bg="green.400" onClick={sumar}>+</Button>
    </Flex>
  )
}

export default ItemCount