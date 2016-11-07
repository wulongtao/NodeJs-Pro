/**
 * Created by raid on 2016/9/17.
 */
var fs = require('fs');
var files = fs.readdirSync(process.cwd());
files.forEach(function (file) {
    if (/\.css/.test(file)) {
        fs.watchFile(process.cwd() + '/' + file, function () {
            console.log(' - ' + file + ' changed!');
            fs.readFile(process.cwd() + '/' + file, 'utf-8', function (err, data) {
                console.log(data);
            })
        });
    }
});