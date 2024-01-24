import { Button, Flex, useToast } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemCount = ({ item }) => {
  const { cart, setCart } = useContext(CartContext)
  const [contador, setContador] = useState(1)
  const toast = useToast()

  function agregarItem() {
    const itemAgregado = { ...item, contador };
    const newCart = [...cart];

    const isInCart = newCart.findIndex((p) => p.id === itemAgregado.id);

    if (isInCart !== -1) {
      newCart[isInCart].contador += contador;
      toast({
        title: `Cantidad actualizada`,
        description: `Se actualizó la cantidad de ${item.titulo} en el carrito.`,
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: "top-right"
      });
    } else {
      newCart.push(itemAgregado);
      toast({
        title: `Producto agregado`,
        description: `Se agregó ${item.titulo} al carrito.`,
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: "top-right"
      });
    }
    setCart(newCart);
  }

  const sumar = () => {
    setContador(contador + 1)
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1)
    }
  };

  return (
    <Flex gap="5px" align="center">
      <Button bg="red.400" onClick={restar}>
        -
      </Button>
      <Button variant="solid" onClick={agregarItem}>
        Agregar {contador} productos
      </Button>
      <Button bg="green.400" onClick={sumar}>
        +
      </Button>
    </Flex>
  );
};

export default ItemCount