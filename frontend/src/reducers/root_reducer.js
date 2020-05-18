import { combineReducers } from 'redux';

import session from './session_reducer';
import errors from './errors_reducer';
import blogs from './blog_reducer';
import ui from './ui_reducer';

const RootReducer = combineReducers({
    session,
    errors,
    blogs,
    ui
});

export default RootReducer;