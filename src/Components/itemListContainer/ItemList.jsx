import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import Item from './Item';
import { capitalizar } from '../../helpers/capitalizar';

const ItemList = ({ productos, titulo }) => {
    return (
        <div className="">
            <Heading color="teal" fontWeight="bold"textAlign="center" my="50px">{capitalizar(titulo)}</Heading>
            <Flex gap="10px" justify="center" direction="row" wrap="wrap" align="end">
                {productos.map((p) => (
                    <Item
                        key={p.titulo}
                        titulo={p.titulo}
                        descripcion={p.descripcion}
                        precio={p.precio}
                        categoria={p.categoria}
                        imagen={p.imagen}
                        id={p.id}
                    />
                ))}
            </Flex>
        </div>
    );
};

export default ItemList;
