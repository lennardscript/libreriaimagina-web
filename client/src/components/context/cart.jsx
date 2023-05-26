import { useReducer, createContext } from "react";
import { cartReducer, cartInitialState } from "../reducers/cart";

export const CartContext = createContext();

/* Testear el reducer que funcione para añadir un producto al carrito

expect(
  reducer([], { type: 'ADD_TO_CART', payload: { id: 1 })
).toEqual([{ id: 1, quantity: 1 }])

*/

function useCartReducer() {

  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = book => dispatch({
    type: 'ADD_TO_CART',
    payload: book
  })

  const removeFromCart = book => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: book
  })

  const clearCart = () => dispatch({ type: 'CLEAR_CART'})

  return { state, addToCart, removeFromCart, clearCart }
}

export function CartProvider({ children }) {

  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
