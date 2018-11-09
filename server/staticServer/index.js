var http = require("http");
var url = require("url");
var path = require("path");
var fs = require("fs");
var mime = require('mime');

function readfile(res, filePathname, mimeType) {
    fs.readFile(filePathname, (err, data) => { //读取文件响应
        if (err) {
            res.writeHead(404, {
                "Context-type": "text/plain"
            });
            res.write('404');
            res.end();
        } else {
            res.writeHead(200, {
                "Context-type": mimeType
            });
            res.write(data); //返回数据
            res.end();
        }
    })
}

function readMime(urlPathname) {
    return mime.getType(path.parse(urlPathname).ext)
}
const static = {
    '/': function (req, res, urlObj) {
        var urlPathname = urlObj.pathname;
        var filePathname = path.join(__dirname, '../../public/index.html', urlPathname) //绝对路径
        console.log(filePathname)
        var mimeType = readMime(urlPathname)
        readfile(res, filePathname, mimeType);
    },
    queryFile: function (req, res, urlObj) {
        var urlPathname = urlObj.pathname;
        var filePathname = path.join(__dirname, '../../public', urlPathname) //绝对路径
        var mimeType = readMime(urlPathname)
        readfile(res, filePathname, mimeType);
    },
}
module.exports = static;