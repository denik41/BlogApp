const initialState = false;

export default function modalWindowIsVisible(state = initialState, action) {
    if (action.type === 'SHOW_MODAL_WINDOW') {
        return true;
    }
    if (action.type === 'CLOSE_MODAL_WINDOW') {
        return false;
    }
    return state;
}