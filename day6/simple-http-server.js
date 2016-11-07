/**
 * Created by raid on 2016/9/20.
 */
var qs = require('querystring');
require('http').createServer(function (req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    if ('/' == req.url) {
        res.end([
            '<form method="POST" action="/url">',
            '<h1>My form</h1>',
            '<fieldset>',
            '<label>Personal information</label>',
            '<p>What is your name?</p>',
            '<input type="text" name="name">',
            '<p><button>Submit</button></p>',
            '</form>'
        ].join(''));
    } else if ('/url' == req.url && 'POST' == req.method) {
        var body = '';
        req.on('data', function (chunk) {
            body += chunk;
        });
        req.on('end', function () {
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end('You sent a <em>' + req.method + '</em> request'
                + '<p>Content-Type: '+ JSON.stringify(req.headers) +'</p>'
                + '<p>Data:</p><pre>' + qs.parse(body).name + '</pre>');
        });
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }

}).listen(3000);