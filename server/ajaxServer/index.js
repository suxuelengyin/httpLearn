var querystring = require('querystring');

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
        sendData(res, JSON.stringify(data));
    }
}
module.exports = api