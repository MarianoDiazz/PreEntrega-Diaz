import { createContext } from "react";

export const CartContext = createContext(null)
// const [cart, setCart] = useState([])
export const CartProvider = ({ children }) => {
    const comision = "Probando context"

    return (
        <CartContext.Provider value={{ comision }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider