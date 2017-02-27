const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DEVELOPMEMNT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

const entry = PRODUCTION ?
    ['./src/index.tsx'] :
    ['./src/hot.js',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080'
    ];

const plugins = PRODUCTION ? [] : [new webpack.HotModuleReplacementPlugin()];


module.exports = {
    devtool: 'source-map',
    entry: entry,
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, 						  // All ts and tsx files will be process by
                use: ['babel-loader', 'ts-loader'], // first babel-loader, then ts-loader
                exclude: /node_modules/                   // ignore node_modules
            }, {
                test: /\.jsx?$/,                          // all js and jsx files will be processed by
                use: 'babel-loader',                   // babel-loader
                exclude: /node_modules/                  // ignore node_modules
            }, {
                test: /\.css?$/,                          // all js and jsx files will be processed by
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                }),
                exclude: /node_modules/                  // ignore node_modules
            }
        ]
    },
    plugins: [
        ...plugins,
        new HtmlWebpackPlugin(
            {
                template: './src/index.html',
                inject: 'body'
            }
        ),
        new CleanWebpackPlugin(
            ['dist'], {
                verbose: true
            }
        ),
        new ExtractTextPlugin('styles.css'),
        // By default, webpack does `n=>n` compilation with entry files. This concatenates
        // them into a single chunk.
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        })
    ]
};
