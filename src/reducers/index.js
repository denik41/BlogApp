import { combineReducers } from 'redux';
import user from './user';
import modalWindowIsVisible from './modalWindowIsVisible';
import navBarLinks from './navBarLinks';

export default combineReducers({
    user,
    modalWindowIsVisible,
    navBarLinks
})
