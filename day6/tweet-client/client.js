/**
 * Created by raid on 2016/9/20.
 */
var http = require('http'),
    qs = require('querystring');

function send(theName) {
    http.request({
        host : '127.0.0.1',
        port : 3000,
        url : '/',
        method : 'POST'
    }, function (res) {
        var body = '';
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            body += chunk;
        });
        res.on('end', function () {
            console.log('\n \033[90m request complete!\033[39m');
            process.stdout.write('\n your name: ' + body);
        });
    }).end(qs.stringify({name : theName}));
}

process.stdout.write('\n your name: ');
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', function (name) {
    send(name.replace('\n', ''));
});