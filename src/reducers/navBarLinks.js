const initialState = [
    {
        title: 'Головна',
        link: '/'
    },
    {
        title: 'Твори',
        link: '/compositions'
    },
    {
        title: 'Автори',
        link: '/users'
    }
];

export default function navBarLinks(state = initialState) {
    return state;
}