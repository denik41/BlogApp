import { post } from './reg';

export default (app) => {
    app.post('/reg', post);
}