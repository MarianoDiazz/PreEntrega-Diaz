import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const db = getFirestore();
        const oneItem = doc(db, "products", id);
        console.log(oneItem);

        getDoc(oneItem).then((snapshot) => {
            setItem(
                { ...snapshot.data(), id: snapshot.id }
            )
        });
    }, [id]);

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    );
};

export default ItemDetailContainer;
