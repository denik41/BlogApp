import { SHOW_MODAL_WINDOW, HIDE_MODAL_WINDOW } from '../constants/modalWindow';

export const showModalWindow = () => ({type: SHOW_MODAL_WINDOW});

export const hideModalWindow = () => ({
        type: HIDE_MODAL_WINDOW
    });
