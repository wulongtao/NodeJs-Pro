/**
 * Created by raid on 2016/9/1.
 */
var fs = require("fs");
fs.readFile("./demo1.js", function (err, file) {
    console.log(file);
});
