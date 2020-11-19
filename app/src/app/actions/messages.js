import { 
    GET_MESSAGES,
    SEND_MESSAGE,
    SET_MESSAGE_DETAILS,
    GET_MESSAGE_DETAILS
} from '../types';
import Messages from '../messages';

export const getMessages = () => {
    return {
        type: GET_MESSAGES,
        payload: Messages
    }
}

export const setMessageDetails = userId => {
    const message = Messages.find(message => message.id === userId);
    return {
        type: SET_MESSAGE_DETAILS,
        payload: message
    }
}

export const getMessageDetails = () => {
    return {
        type: GET_MESSAGE_DETAILS
    }
}

export const sendMessage = message => {
    return {
        type: SEND_MESSAGE,
        payload: {
            id: Math.random().toString(),
            message,
            time: "05:25",
            owner: true
        }
    }
}