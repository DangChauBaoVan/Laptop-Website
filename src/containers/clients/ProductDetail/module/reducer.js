import { GET_PRODUCT_BY_ID_FAIL, GET_PRODUCT_BY_ID_SUCCESS } from "./type";

const initialState = {
    productInfo:[],
    err: null
}

const productInfoReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case GET_PRODUCT_BY_ID_SUCCESS:
        return { ...state, productInfo: payload,err:null };
    case GET_PRODUCT_BY_ID_FAIL:
        return { ...state, err: payload }

  default:
    return state
  }
}
export default productInfoReducer
