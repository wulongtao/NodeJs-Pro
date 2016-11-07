/**
 * Created by raid on 2016/9/20.
 */
require('http').createServer(function (req, res) {
    res.writeHead(200, {'Content-Type' : 'image/png'});
    require('fs').createReadStream('image.jpg').pipe(res);
}).listen(3000);