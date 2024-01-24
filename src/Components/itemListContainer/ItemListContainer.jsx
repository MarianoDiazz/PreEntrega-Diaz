import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState('Productos');
    const categoria = useParams().categoria || "";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getFirestore();
                const itemCollection = collection(db, "products");

                const snapshot = await getDocs(itemCollection);
                const productosData = snapshot.docs
                    .map(doc => ({ ...doc.data(), id: doc.id }))
                    .filter(producto => !categoria || producto.categoria.toLowerCase() === categoria.toLowerCase());

                console.log(productosData);
                setProductos(productosData);
                setTitulo(categoria ? categoria : 'Productos');
            } catch (error) {
                console.error("Error al cargar los productos:", error.message);
            }
        };

        fetchData();
    }, [categoria]);

    return (
        <div className='containerList'>
            <ItemList productos={productos} titulo={titulo} />
        </div>
    );
};

export default ItemListContainer;
