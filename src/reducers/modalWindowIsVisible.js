import { SHOW_MODAL_WINDOW, HIDE_MODAL_WINDOW } from '../constants/modalWindow';

const initialState = false;

export default function modalWindowIsVisible(state = initialState, action) {
    if (action.type === SHOW_MODAL_WINDOW) {
        return true;
    }
    if (action.type === HIDE_MODAL_WINDOW) {
        return false;
    }
    return state;
}