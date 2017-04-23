import { AUTH_USER, UNAUTH_USER } from '../constants/user';

export const authUser = (login, pass) => {
    const user = {
        login: login,
        password: pass
    };
    return {
        type: AUTH_USER,
        payload: user
    }
};

export const unAuthUser = () => {
    return {
        type: UNAUTH_USER
    };
};