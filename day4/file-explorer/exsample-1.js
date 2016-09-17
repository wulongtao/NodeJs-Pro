/**
 * Created by raid on 2016/9/17.
 */
//同步版本
console.log(require("fs").readdirSync(__dirname));

//异步版本
function async(err, files) {
    console.log(files);
}
require('fs').readdir('.', async);

process.stdout.write('Hello world');