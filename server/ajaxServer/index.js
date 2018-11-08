function sendData(res,data){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(data);
}
const api = {
    '/test.js': function (req, res) {
        const data = req.body;
        sendData(res,data);
    },
    '/post.js': function (req, res) {      
        const data=req.body;
        sendData(res,JSON.stringify(data))
    }
}
module.exports = {
    api
};