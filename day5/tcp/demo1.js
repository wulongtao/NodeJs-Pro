/**
 * Created by raid on 2016/9/18.
 */
require('http').createServer(function (req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end('<h1>Hello World</h1>');
}).listen(3000);