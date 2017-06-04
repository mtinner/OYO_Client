const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PRODUCTION = process.env.NODE_ENV === 'production';

const entry = PRODUCTION ?
    [
        './src/index.tsx'
    ] :
    ['./src/hot.js',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080'
    ];

const plugins = PRODUCTION ? [] : [new webpack.HotModuleReplacementPlugin()];

let clientConfig = {
    devtool: PRODUCTION ? '' : 'source-map',
    entry: entry,
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.scss', '.js', '.jsx', '.ts', '.tsx']
    },
    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                test: /oyo.scss?$/,                          // all js and jsx files will be processed by
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                }),
                exclude: /node_modules/                  // ignore node_modules
            },
            {
                test: /\.tsx?$/, 						  // All ts and tsx files will be process by
                use: ['babel-loader', 'ts-loader'], // first babel-loader, then ts-loader
                exclude: /node_modules/                   // ignore node_modules
            }, {
                test: /\.jsx?$/,                          // all js and jsx files will be processed by
                use: 'babel-loader',                   // babel-loader
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

let serverConfig = {
    entry: './prod-server.js',
    node: {
        __dirname: false,
        __filename: true,
    },
    target: 'node',
    output: {
        path: __dirname + '/dist',
        filename: 'server.bundle.js'
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    performance: {
        hints: false
    },
    plugins: [
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
if(PRODUCTION){
    module.exports = [clientConfig, serverConfig];
}
else {
    module.exports = clientConfig;
}

