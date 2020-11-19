import { APP_CHANGE_PAGE, APP_CHANGE_PAGE_BACK } from '../types';

const initialState = {
    page: 'index',
    path: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case APP_CHANGE_PAGE:
            if (action.payload === state.page) return state;
            return { 
                page: action.payload,
                path: state.path.concat([state.page])
            }
        case APP_CHANGE_PAGE_BACK:
            const lastPage = state.path[state.path.length - 1];
            return {
                page: lastPage,
                path: state.path.slice(0, -1)
            }
        default:
            return state;
    }
}