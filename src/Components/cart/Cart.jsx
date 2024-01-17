import {useContext} from 'react'
import { CartContext } from '../../context/ShoppingCartContext'

const Cart = () => {
    const {comision}= useContext(CartContext)
    return (
        <div>uso context {comision}</div>
    )
}

export default Cart