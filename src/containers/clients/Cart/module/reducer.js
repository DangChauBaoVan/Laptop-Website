import { ADD_TO_CART, DECREASE_QUANTITY, INCRESE_QUANTITY, REMOVE_FROM_CART } from "./type";

const initialState = {
    cart: [],
    totalQuantity: 0
}

const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_TO_CART:
            let productList = [...state.cart];
            let index = productList.findIndex(productInCart => productInCart._id === payload._id);
            if (index != -1) {
                productList[index].quantity += 1;
            }
            else {
                payload.quantity = payload.quantity + 1;
                productList.push(payload)
            }

            let amount = productList?.reduce((total, sanPham, index) => {
                return total + sanPham.quantity
            }, 0);
            return { ...state, cart: productList, totalQuantity: amount }
        case REMOVE_FROM_CART:
            let listProduct = [...state.cart];
            let idx = listProduct.findIndex(productInCart => productInCart._id === payload);
            if (idx != -1) {
                listProduct.splice(idx, 1);
            }
            let amount2 = listProduct?.reduce((total, sanPham, index) => {
                return total + sanPham.quantity
            }, 0);
            return { ...state, cart: listProduct, totalQuantity: amount2 }
        case INCRESE_QUANTITY:
            let listProductIncrese = [...state.cart];
            let idPI = listProductIncrese.findIndex(productInCart => productInCart._id === payload);
            if (idPI != -1) {
                listProductIncrese[idPI].quantity += 1;
            }
            let amount3 = listProductIncrese?.reduce((total, sanPham, index) => {
                return total + sanPham.quantity
            }, 0);
            return { ...state, cart: listProductIncrese, totalQuantity: amount3 }
        case DECREASE_QUANTITY:
            let listProductDecrese = [...state.cart];
            let idPD = listProductDecrese.findIndex(productInCart => productInCart._id === payload);
            if (idPD != -1) {
                listProductDecrese[idPD].quantity -= 1;
            }
            if(listProductDecrese[idPD].quantity === 0){
                listProductDecrese.splice(idPD,1);
            }
            let amount4 = listProductDecrese?.reduce((total, sanPham, index) => {
                return total + sanPham.quantity
            }, 0);
            
            return { ...state, cart: listProductDecrese, totalQuantity: amount4 }
        default:
            return state
    }
}

export default cartReducer;