import React from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const Categorias = ({ productos }) => {
    const { categoria } = useParams();

    const filteredProducts = productos.filter(product => product.categoria === categoria);

    return (
        <div>
            <h2>Categoría: {categoria}</h2>
            <ItemList productos={filteredProducts} />
        </div>
    );
};

export default Categorias;
