import { LAY_DANH_SACH_SAN_PHAM_FAIL, LAY_DANH_SACH_SAN_PHAM_REQUEST, LAY_DANH_SACH_SAN_PHAM_SUCCESS } from "./type";

const initialState = {
    loading: false,
    productList: [],
    err: null
}

const danhSachSanPhamReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case LAY_DANH_SACH_SAN_PHAM_REQUEST:
            return { ...state, loading: true, err: null }
        case LAY_DANH_SACH_SAN_PHAM_SUCCESS:
            return { ...state, productList: payload, loading: false };
        case LAY_DANH_SACH_SAN_PHAM_FAIL:
            return { ...state, err: payload, loading: false }

        default:
            return state
    }
}
export default danhSachSanPhamReducer;
