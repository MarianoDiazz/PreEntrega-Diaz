import React, { useEffect, useState } from 'react'
import { obtenerItemPorId } from '../../helpers/obtenerData'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const id = useParams().id

    useEffect(() => {
        obtenerItemPorId(Number(id))
            .then((res) => {
                setItem(res)
            })

    }, [id])

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer