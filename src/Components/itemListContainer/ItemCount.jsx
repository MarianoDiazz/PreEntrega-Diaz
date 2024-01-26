import { Button, Flex, useToast } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemCount = ({ item }) => {
  const { cart, setCart } = useContext(CartContext);
  const [contador, setContador] = useState(1);
  const toast = useToast();

  const agregarItem = () => {
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
        position: 'top-right',
      });
    } else {
      newCart.push(itemAgregado);
      toast({
        title: `Producto agregado`,
        description: `Se agregó ${item.titulo} al carrito.`,
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    }
    setCart(newCart);
  };

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <Flex align="center">
      <Button
        colorScheme="purple"
        variant="outline"
        onClick={restar}
        _hover={{ bg: 'purple.500', color: 'white' }}
      >
        -
      </Button>
      <Button
        colorScheme='purple'
        variant="solid"
        onClick={agregarItem}
        ml="2"
        _hover={{ bg: 'purple.300' }}
      >
        Agregar {contador} productos
      </Button>
      <Button
        colorScheme="purple"
        variant="outline"
        onClick={sumar}
        ml="2"
        _hover={{ bg: 'purple.500', color: 'white' }}
      >
        +
      </Button>
    </Flex>
  );
};

export default ItemCount;
