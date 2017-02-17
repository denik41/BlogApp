const initialState = {};

export default function user(state = initialState, action) {
    if (action.type === 'AUTH_USER') {
        return {
            login: action.payload.login
        }
    }
    return state;
}
