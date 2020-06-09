import { combineReducers } from 'redux';

import location from './location_reducer';
import contacts from './contact_reducer'
import session from './session_reducer';
import errors from './errors_reducer';
import blogs from './blog_reducer';
import ui from './ui_reducer';

const RootReducer = combineReducers({
    session,
    errors,
    blogs,
    contacts,
    location,
    ui
});

export default RootReducer;