import { AUTH_USER, UNAUTH_USER } from '../constants/user'

const initialState = {
    isAuth: false
};

export default function user(state = initialState, action) {
    if (action.type === AUTH_USER) {
        return {
            login: action.payload.login,
            isAuth: true
        }
    }

    if (action.type === UNAUTH_USER) {
        return {
            isAuth: false
        }
    }
    return state;
}