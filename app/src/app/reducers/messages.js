import { 
    GET_MESSAGES,
    SET_MESSAGE_DETAILS,
    GET_MESSAGE_DETAILS,
    SEND_MESSAGE 
} from '../types';

const initialState = {
    allMessages: [],
    detailMessageList: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES:
            return {
                ...state,
                allMessages: action.payload
            };
        case SET_MESSAGE_DETAILS:
            return {
                ...state,
                detailMessageList: action.payload
            };
        case GET_MESSAGE_DETAILS:
            return {
                ...state,
                detailMessageList: state.detailMessageList
            }
        case SEND_MESSAGE:
            const detailMessageList = {...state.detailMessageList};
            detailMessageList.messages = detailMessageList.messages.concat([action.payload]);
            return {
                ...state,
                detailMessageList: detailMessageList
            }
        default: return state;
    }
}