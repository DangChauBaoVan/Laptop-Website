import callApi2 from "utils/callApi2";

const quanLyVe = {
    getTicketInfo() {
        return callApi2(`ticketDetails`);
      }
}
export default quanLyVe;