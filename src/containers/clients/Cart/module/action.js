import { ADD_TO_CART, DECREASE_QUANTITY, INCRESE_QUANTITY, REMOVE_FROM_CART } from "./type";

export const actAddToCart = (product) => ({
    type: ADD_TO_CART,
    payload:product
})
export const actRemoveFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    payload:id
})

export const actIncreseQuantity =(id) => ({
    type: INCRESE_QUANTITY,
    payload:id
})
export const actDecreaseQuantity = (id) => ({
    type: DECREASE_QUANTITY,
    payload:id
})

