import React, { createContext, useContext, useState } from 'react';
const CartContext = createContext();


export const useCart = () => useContext(CartContext);

const Cart = ({children})=> {
    const [cart, setCart] =useState([])
    const addToCart=(product) => {
        setCart((prevcart) => [...prevcart,product])
    }
    return (
        <Cart.Provider value = {{cart,addToCart}}>{children}</Cart.Provider>
    );
  }
  
  export default Cart;