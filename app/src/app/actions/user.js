import { USER_SAVE } from '../types';

export const saveUser = user => {
    return {
        type: USER_SAVE,
        payload: user
    }
}