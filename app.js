import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config.js';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import config from './config';
import session from 'express-session';
import mongoose from 'mongoose';
import routes from './routes';

const app = express();

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

//mongoose.connect(config.get("mongoose:uri"), config.get("mongoose:options"));

//const MongoStore = require('connect-mongo')(session);
//app.use(session({
//    secret: config.get('session:secret'),
//    key: config.get('session:key'),
//    cookie: config.get('session:cookie'),
//    store: new MongoStore({mongooseConnection: mongoose.connection})
//}));

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

routes(app);

app.listen(3000, error => {
    if (error) {
        console.error(error)
    } else {
        console.info("Server is running on port 3000...");
    }
});