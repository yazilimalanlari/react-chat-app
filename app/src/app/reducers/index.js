import { combineReducers } from 'redux';

import app from './app';
import user from './user';
import messages from './messages';

export default combineReducers({
    app,
    user,
    messages
});