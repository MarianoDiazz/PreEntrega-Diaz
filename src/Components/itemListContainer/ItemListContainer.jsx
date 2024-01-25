import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { Spinner, Box } from '@chakra-ui/react';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [titulo, setTitulo] = useState('Productos');
    const categoria = useParams().categoria || '';

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const db = getFirestore();
                const itemCollection = collection(db, 'products');

                const snapshot = await getDocs(itemCollection);
                const productosData = snapshot.docs
                    .map(doc => ({ ...doc.data(), id: doc.id }))
                    .filter(producto => !categoria || producto.categoria.toLowerCase() === categoria.toLowerCase());

                setProductos(productosData);
                setTitulo(categoria ? categoria : 'Productos');
            } catch (error) {
                console.error('Error al cargar los productos:', error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [categoria]);

    return (
        <Box className="containerList" justifyContent="center" align="center">
            {loading ? (
                <Spinner size="xl" /> 
            ) : (
                <ItemList productos={productos} titulo={titulo} />
            )}
        </Box>
    );
};

export default ItemListContainer;
