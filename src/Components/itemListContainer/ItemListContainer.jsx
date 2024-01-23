import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from "firebase/firestore"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [titulo, SetTitulo] = useState('Productos')
    const categoria = useParams().categoria
    console.log(categoria);

    useEffect(() => {
        const db = getFirestore()
        const itemCollection = collection(db, "products")
        getDocs(itemCollection).then((snapshot) => {
            const products = snapshot.docs.map((doc) => {
                return { ...doc.data(), id: doc.id }
            })
            setProductos(products);
        })
    }, [categoria])



    return (
        <div className='containerList' >
            <ItemList productos={productos} titulo={titulo} />
        </div>
    );
};



export default ItemListContainer;
