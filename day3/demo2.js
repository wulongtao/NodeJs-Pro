/**
 * Created by raid on 2016/9/1.
 */
var http = require("http");
var queryString = require("querystring");

http.createServer(function (req, res) {
    var postData = "";
    req.on('data', function (chunk) {
        postData += chunk;
        console.log(postData);
    });
    req.on('end', function () {
        res.end(postData + "weg");
    })
}).listen(8080, '127.0.0.1');
console.log("服务器启动完成");