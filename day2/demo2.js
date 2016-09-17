/**
 * Created by raid on 2016/8/29.
 */
var a = require('./module_a');
require('./module_b');


console.log(a.name);
console.log(a.data);
console.log(a.getPrivate());