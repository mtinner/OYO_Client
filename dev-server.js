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
        "**/api/**": 'http://localhost:8610'
    },
    historyApiFallback: {
        index: 'index.html'
    }
});

server.listen(8080, 'localhost', () => {
});