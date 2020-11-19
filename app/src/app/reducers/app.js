import { APP_CHANGE_PAGE } from '../types';

const initialState = {
    page: 'index',
    lastPage: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case APP_CHANGE_PAGE:
            return { 
                page: action.payload,
                lastPage: state.page 
            }
        default:
            return state;
    }
}