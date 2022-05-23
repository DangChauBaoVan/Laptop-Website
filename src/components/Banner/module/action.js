
import quanLySanPham from "apis/quanLySanPham";
import { GET_BRAND_FAIL, GET_BRAND_SUCCESS } from "./type";

const actGetBrandSuccess = (brandList) => ({
    type: GET_BRAND_SUCCESS,
    payload:brandList
})
const actGetBrandFail = err => ({
    type: GET_BRAND_FAIL,
    payload:err
})
export const actGetBrand = () => {
    return dispatch => {
        quanLySanPham.getBrand()
        .then(response => {
            dispatch(actGetBrandSuccess(response.data));
        })
        .catch( err => {
            dispatch(actGetBrandFail("Unable to get data"))
        })
    }

}