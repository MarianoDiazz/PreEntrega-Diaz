import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const quantityInCart = () => {
        return cart.reduce((acc, elem) => acc + elem.contador, 0);
    };

    const totalPrice = () => {
        const total = cart.reduce((acc, elem) => acc + elem.precio * elem.contador, 0);
        return parseFloat(total.toFixed(3));
    };

    const clearCart = () => {
        setCart([]);
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId, newQuantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, contador: newQuantity } : item
            )
        );
    };

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, removeFromCart, updateQuantity, setCart, clearCart, quantityInCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};
