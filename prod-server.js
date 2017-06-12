var http = require('http'),
    httpProxy = require('http-proxy'),
    express = require('express'),
    compression = require('compression'),
    fallback = require('express-history-api-fallback'),
    app = express();

//
// Create a proxy server with custom application logic
//npm
app.use(compression());
var proxy = httpProxy.createProxyServer({});
app.use('/api', reverseProxy);
const root = __dirname;
app.use(express.static(root));
app.use(fallback('index.html', {root: root}));


//
// Create your custom server and just call `proxy.web()` to proxy
// a web request to the target passed in the options
// also you can use `proxy.ws()` to proxy a websockets request
//
const server = http.createServer(app);
// You can define here your custom logic to handle the request
// and then proxy the request.
function reverseProxy(req, res) {
    proxy.web(req, res, {target: 'http://localhost:8610/api'});
    proxy.on('error', function (err, req, res) {
        res.writeHead(500, {
            'Content-Type': 'text/plain'
        });

        res.end('Something went wrong. And we are reporting a custom error message.');
    });
}

console.log("listening on port 8080");
server.listen(8080);
