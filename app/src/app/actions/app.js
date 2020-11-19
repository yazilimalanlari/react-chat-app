import { APP_CHANGE_PAGE } from '../types';

export const changePage = page => {
    return {
        type: APP_CHANGE_PAGE,
        payload: page
    }
}