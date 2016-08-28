/**
 * Created by raid on 2016/8/28.
 * 数据类型
 */
var a = 5;
var b = a;
b = 6;

console.log(a);
console.log(b);

var a = ['hello', 'world'];
var b = a;
b[0] = 'bye';

console.log(a[0]);
console.log(b[0]);

var a = 'woot';
var b = new String('woot');
console.log(a+b);

console.log(typeof a);
console.log(typeof b);

console.log(a instanceof String);
console.log(b instanceof String);

console.log(a === b);
console.log(a == b);

console.log(typeof null == "object");
console.log(typeof [] == "object");