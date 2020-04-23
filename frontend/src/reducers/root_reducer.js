import { combineReducers } from 'redux';
import ui from './ui_reducer';

const RootReducer = combineReducers({
    ui
});

export default RootReducer;