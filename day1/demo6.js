/**
 * Created by raid on 2016/8/28.
 */
var arr = new Array();
console.log(arr);
var arr = new Array(3);
console.log(arr);
var arr = new Array("raid","xiaoxiaohei", false);
console.log(arr);
var arr = [];
console.log(arr);

var obj = {a:1,b:5};
console.log(Object.keys(obj));

var arr = [46,25,89,76,38,12];
function CompareAB(a, b) {
    return a - b;
}
console.log(arr);
arr.sort(CompareAB);
console.log(arr);

var arr = [];
arr.push("abc");
arr.push("eee");
arr.push("abgggc");
console.log(arr);
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr);

var arr = [46,25,89,76,38,12];
console.log(arr);
arr.push("abc");
arr.shift();
console.log(arr);
arr.unshift(456);
console.log(arr);

var arr1 = [46,25,89,76,38,12];
var arr2 = ["aa","bb"];
console.log(arr1.concat(arr2));

console.log(arr.slice(2, 4));

console.log(arr);
console.log(arr.splice(2, 2));
console.log(arr);
arr.splice(0, 2, ['ab','dc']);
console.log(arr);

var arr1 = [46,25,89,76,38,12];
var e = arr1.every(function (m) {
    return e > 50;
});
console.log(e);
var s = arr1.some(function (m) {
    return m > 50;
});
console.log(s);