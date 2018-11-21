var http = require("http");
var url = require("url");
var path = require("path");
var static = require('./staticServer')
var api = require('./ajaxServer');

var server = new http.Server();
server.on('request', function (req, res) {
    console.log(req.method);
    var urlObj = url.parse(req.url);
    var urlPathname = urlObj.pathname;
    var ext = path.parse(urlPathname).ext;
    req.setEncoding('utf-8');
    if (ext !== ".js") {
        console.log(urlPathname)
        const apis = Object.keys(static);
        apis.indexOf(urlPathname) > -1 ?
            static[urlPathname](req, res, urlObj) :
            static.queryFile(req, res, urlObj)
    } else {
        const apis = Object.keys(api);
        if (apis.indexOf(urlPathname) > -1) {
            if (req.method === 'GET') {
                req.body = urlObj.query;
                api[urlPathname](req, res)
            } else if (req.method === 'POST') {
                let postData = '';
                req.on("data", function (postDataChunk) {
                    postData += postDataChunk;
                });
                req.on("end", function () {
                    req.body = postData;
                    console.log(req.body);
                });
                req.on('end', function () {
                    api[urlPathname](req, res)
                })
            }
        } else {
            static.queryFile(req, res, urlObj)
        }
    }
})

server.listen(3000, function () {
    console.log("运行在：http://localhost:3000");
})