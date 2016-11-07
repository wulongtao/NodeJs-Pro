/**
 * Created by raid on 2016/9/17.
 */
var fs = require('fs');
var stream = fs.createReadStream('../file-explorer/index.js');
stream.on('data', function (chunk) {
    console.log(chunk);
});
stream.on('end', function (chunk) {
    console.log(chunk);
});