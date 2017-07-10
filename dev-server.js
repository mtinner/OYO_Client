var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.config');

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    hot: true,
    filename: config.output.filename,
    stats: {
        colors: true
    },
    proxy: {
        "/api": {
            target: 'http://localhost:8610'
        },
        "/ws": {
            target: 'http://localhost:8610',
            ws: true
        }
    },
    historyApiFallback: {
        index: 'index.html'
    }
});

server.listen(8080, 'localhost', () => {
});