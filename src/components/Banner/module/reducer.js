import { GET_BRAND_FAIL, GET_BRAND_SUCCESS } from "./type";

const initialState = {
    brandList: [],
    err: null
}

const brandReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case GET_BRAND_SUCCESS:
        return { ...state, brandList: payload };
    case GET_BRAND_FAIL:
        return { ...state, err: payload,}

  default:
    return state
  }
}
export default brandReducer;
