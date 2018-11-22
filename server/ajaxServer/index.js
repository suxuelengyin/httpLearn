var querystring = require('querystring');
var url = require('url')
var extendsApi = require("../../src/server/index.js") 
function sendData(res, data) {
    console.log(typeof data);
    res.writeHead(200, {
        'Content-Type': 'aplication/json'
    });
    res.end(data);
}
const api = {
    '/test.js': function (req, res) {
        const data = req.body
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end(data);
    },
    '/post.js': function (req, res) {
        let data = req.body;
        const jsondata = querystring.parse(data);
        sendData(res, JSON.stringify(jsondata));
    },
    '/fetch.js': function (req, res) {
        const data = req.body;
        console.log(data);
        sendData(res, data);
    }
}
const keys=Object.keys(extendsApi);
keys.forEach((item,index)=>{
    api[item]=function(req,res){
        sendData(res,extendsApi[item](req,res))
    }
})
module.exports =api