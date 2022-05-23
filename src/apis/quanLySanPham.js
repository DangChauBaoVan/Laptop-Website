import callApi from "utils/callApi";

const quanLySanPham = {
  layDanhSachSanPham() {
    return callApi(`laptop`);
  },
  getBrand() {
    return callApi(`brand`);
  },
  getProductById(id){
    return callApi(`laptop/${id}`)
  }
}
export default quanLySanPham;