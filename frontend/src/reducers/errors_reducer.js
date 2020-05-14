import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import BlogErrorsReducer from './blog_errors_reducer';

export default combineReducers({
    session: SessionErrorsReducer,
    
});