const initialState = [
    {
        title: 'Головна',
        link: '/'
    },
    {
        title: 'Про нас',
        link: '/about'
    },
    {
        title: 'Автори',
        link: '/authors'
    }];

export default function navBarLinks(state = initialState) {
    return state;
}