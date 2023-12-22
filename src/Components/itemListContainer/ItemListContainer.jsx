import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { obtenerDatos } from '../../helpers/obtenerData';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])
    const [titulo, SetTitulo] = useState('Productos')
    const categoria = useParams().categoria

    useEffect(() => {
        obtenerDatos()
            .then((res) => {
                if (categoria) {
                    setProductos(res.filter((p) => p.categoria.toLowerCase() === categoria.toLowerCase()))
                    SetTitulo(categoria)
                    console.log(res);
                } else {
                    setProductos(res)
                    SetTitulo('Productos')
                }


            })
    }, [categoria])

    return (
        <div className='containerList' >
            <h2 className='greeting'>{greeting}</h2>
            <ItemList productos={productos} titulo={titulo} />
        </div>
    );
};



export default ItemListContainer;
