import React from 'react';
import '../index.css'

const ItemListContainer = ({ greeting }) => {
    return (
        <div className='containerList' >
            <h2 className='greeting'>{greeting}</h2>
        </div>
    );
};



export default ItemListContainer;
