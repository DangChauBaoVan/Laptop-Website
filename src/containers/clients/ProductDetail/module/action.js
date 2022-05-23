import quanLySanPham from "apis/quanLySanPham";
import { GET_PRODUCT_BY_ID_FAIL, GET_PRODUCT_BY_ID_SUCCESS } from "./type";

const actGetProductByIdSuccess = (productInfo) => ({
    type: GET_PRODUCT_BY_ID_SUCCESS,
    payload:productInfo
})
const actGetProductByIdFail = err => ({
    type: GET_PRODUCT_BY_ID_FAIL,
    payload:err
})
export const actGetProductById = (id) => {
    return dispatch => {
        quanLySanPham.getProductById(id)
        .then(response => {
            dispatch(actGetProductByIdSuccess(response.data));
        })
        .catch( err => {
            dispatch(actGetProductByIdFail("Unable to get data"))
        })
    }

}