import quanLyVe from "apis/quanLyVe";

const { GET_TICKET_SUCCESS, GET_TICKET_FAIL } = require("./type");

const actGetTicketSuccess = (ticket) => ({
    type: GET_TICKET_SUCCESS,
    payload:ticket
})
const actGetTicketFail = (err) => ({
    type: GET_TICKET_FAIL,
    payload:err
})
export const actGetTicket = () => {
    return dispatch => {
        quanLyVe.getTicketInfo()
        .then(response => {
            dispatch(actGetTicketSuccess(response.data));
        })
        .catch( err => {
            dispatch(actGetTicketFail("Unable to get data"))
        })
    }

}