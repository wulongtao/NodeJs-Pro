/**
 * Created by raid on 2016/8/29.
 */
var mybuffer = new Buffer('==ii1j2i3hli23h', 'base64');
console.log(mybuffer);
require("fs").writeFile('logo.gif', mybuffer);