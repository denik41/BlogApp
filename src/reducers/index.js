import { combineReducers } from 'redux';
import user from './user';
import modalWindowIsVisible from './modalWindowIsVisible';

export default combineReducers({
    user,
    modalWindowIsVisible
})
