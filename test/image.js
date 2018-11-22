var fs = require('fs')
const mime='test/test.jpg';
const encoding='base64';
var data=fs.readFileSync('test/test.jpg').toString(encoding)
const uri='data:'+mime+';'+encoding+','+data;
console.log(uri)