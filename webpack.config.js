const webpack = require('webpack')
const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')},
    module:{
        rules:[{
           test: /\.js$/,
           exclude: /node_modules/,
           loader: ['babel-loader']
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i, 
            loader: "file-loader?name=/src/assets/img/[name].[ext]"
        }
    ]
    },
    plugins:[
        new HWP(
           {template: path.join(__dirname,  '/public/index.html')}
        ),
        new webpack.ProvidePlugin({
                '$': "jquery",
                'jQuery': "jquery",
                'Popper': 'popper.js'
            }),
    ],
 }