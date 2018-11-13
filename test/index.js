
var fs=require('fs')
fs.readFile('test/cache_index.db',function(err,buf){
    var date=new Date();
    var header={}
    date.setUTCFullYear(1900+buf[1]);
    date.setUTCMonth(buf[2])
    date.setUTCDate(buf[3]);
    header.lastupdate=date.toUTCString();
    header.toatalrecords=buf.readUInt32LE(4)
    console.log(header.lastupdate);
})