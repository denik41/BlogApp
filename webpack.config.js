var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/public/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                loaders: ['react-hot', 'babel-loader'],
                include: [
                    path.resolve(__dirname, "src")
                ],
                exclude: /(node_modules)/,
                test: /\.js$/,
                plugins: ['transform-runtime']
            },
            {
                loader: 'style-loader!css-loader',
                test: /\.css$/
            },
            {
                test: /\.(jpg|woff|woff2|gif|png|eot|ttf|svg)$/,
                loader: 'file-loader?emitFile=false&name=[path][name].[ext]'
            }
            //{
            //    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            //    loader: "file"
            //},
            //{
            //    test: /\.(woff|woff2)$/,
            //    loader: "url?prefix=font/&limit=5000"
            //},
            //{
            //    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            //    loader: "url?limit=10000&mimetype=application/octet-stream"
            //},
            //{
            //    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            //    loader: "url?limit=10000&mimetype=image/svg+xml"
            //}
        ]
    }
};