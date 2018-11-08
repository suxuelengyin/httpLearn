var http = require("http");
var url = require("url");
var path = require("path");
var static = require('./staticServer')
var api = require('./ajaxServer');
var querystring = require('querystring');
var server = new http.Server();

server.on('request', function (req, res) {
    console.log(req.method);
    var urlObj = url.parse(req.url);
    var urlPathname = urlObj.pathname;
    var ext = path.parse(urlPathname).ext;
    req.setEncoding('utf-8');
    if (ext !== ".js") {
        static.static[urlPathname](req, res, urlObj)
    } else {
        if (req.method === 'GET') {
            req.body = urlObj.query
        } else if (req.method === 'POST') {
            let postData = '';
            req.on("data", function (postDataChunk) {
                postData += postDataChunk;
            });
            req.on("end", function () {
                const params = querystring.parse(postData);
                req.body = params;
            });
        }
        req.on('end', function () {
            api.api[urlPathname](req, res)
        })

    }

})

server.listen(3000, function () {
    console.log("端口号：http://localhost:3000");
})