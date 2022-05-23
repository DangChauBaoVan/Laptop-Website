import quanLySanPham from "apis/quanLySanPham";
import { LAY_DANH_SACH_SAN_PHAM_FAIL, LAY_DANH_SACH_SAN_PHAM_REQUEST, LAY_DANH_SACH_SAN_PHAM_SUCCESS } from "./type";

const actLayDanhSachSanPhamRequest =  () => ({
    type: LAY_DANH_SACH_SAN_PHAM_REQUEST,
})
const actLayDanhSachSanPhamSuccess = (danhSachSanPham) => ({
    type: LAY_DANH_SACH_SAN_PHAM_SUCCESS,
    payload:danhSachSanPham
})
const actLayDanhSachSanPhamFail = err => ({
    type: LAY_DANH_SACH_SAN_PHAM_FAIL,
    payload:err
})
export const actLayDanhSachSanPham = () => {
    return dispatch => {
        dispatch(actLayDanhSachSanPhamRequest());
        quanLySanPham.layDanhSachSanPham()
        .then(response => {
            dispatch(actLayDanhSachSanPhamSuccess(response.data));
        })
        .catch( err => {
            dispatch(actLayDanhSachSanPhamFail("Unable to get data"))
        })
    }

}