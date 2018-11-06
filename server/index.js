var http = require("http");
var url = require("url");
var path = require("path");
var fs = require("fs");
var mime = require('mime');
var server = http.createServer(function (req, res) {
    var urlObj = url.parse(req.url);
    var urlPathname = urlObj.pathname;
    if (urlPathname === "/") {
        urlPathname = "../public/index.html"
    }
    var filePathname = path.join(__dirname, '../public', urlPathname)//绝对路径
    var ext = path.parse(urlPathname).ext;
    console.log(urlObj);

    var mimeType = mime.getType(ext)
    fs.readFile(filePathname, (err, data) => {//读取文件响应
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
})
server.listen(3000, function () {
    console.log("端口号：http://localhost:3000");

})