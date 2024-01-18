import { createContext, useState } from "react";

export const CartContext = createContext()
export const ShoppingCartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const quantityInCart = () => {
        return cart.reduce((acc, elem) => acc + elem.contador, 0)
    }
    const totalPrice = () => {
        return cart.reduce((acc, elem) => acc + elem.precio * elem.contador, 0)
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, setCart, clearCart, quantityInCart, totalPrice }} >
            {children}
        </CartContext.Provider>


    )
}