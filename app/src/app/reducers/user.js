import { USER_SAVE } from '../types';

const initialState = {
    name: 'TestUser',
    phone: '0555 555 55 55'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_SAVE:
            return action.payload;
        default:
            return state;
    }
}