import { APP_CHANGE_PAGE, APP_CHANGE_PAGE_BACK } from '../types';

export const changePage = page => {
    return {
        type: APP_CHANGE_PAGE,
        payload: page
    }
}

export const changePageBack = () => {
    return {
        type: APP_CHANGE_PAGE_BACK
    }
}