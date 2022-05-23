import { GET_TICKET_FAIL, GET_TICKET_SUCCESS } from "./type"

const initialState = {
    ticket: {},
    err: null
}

const ticketReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_TICKET_SUCCESS:
            return { ...state, ticket: payload, err: null }
        case GET_TICKET_FAIL:
            return { ...state, err: payload }
        default:
            return state
    }
}

export default ticketReducer;