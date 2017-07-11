var http = require('http'),
    httpProxy = require('http-proxy'),
    express = require('express'),
    compression = require('compression'),
    fallback = require('express-history-api-fallback'),
    app = express();

app.use(compression());
var proxy = httpProxy.createProxyServer();

app.use('/api', reverseProxy);
const root = __dirname;
app.use(express.static(root));
app.use(fallback('index.html', {root: root}));


const server = http.createServer(app);
server.on('upgrade', function(req, socket) {
    proxy.ws(req, socket, {target: {host: 'localhost', port: 8610}, ws: true});
});
function reverseProxy(req, res) {
    proxy.web(req, res, {target: 'http://localhost:8610/api'});
    proxy.on('error', function(err, req, res) {
        res.writeHead(500, {
            'Content-Type': 'text/plain'
        });

        res.end('Something went wrong. And we are reporting a custom error message.');
    });
}

console.log("listening on port 8080");
server.listen(8080);
