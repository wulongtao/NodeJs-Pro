/**
 * Created by raid on 2016/8/28.
 * V8新特性
 */

// var a = {a : "b", c : "d"};
// Object.prototype.e = "d";
// for (var i in a) {
//     console.log(i);
// }
// console.log("----");
// for (var i in a) {
//     if (a.hasOwnProperty(i)) {
//         console.log(i);
//     }
// }
// console.log("---------");
// var keyArr = Object.keys(a);
// console.log(keyArr);
// console.log("---------");
//
// console.log(Array.isArray(new Array));
// console.log(Array.isArray([]));
// console.log(Array.isArray(null));
// console.log(Array.isArray("a0a"));
// console.log("---------");
//
//
// [1,2,3].forEach(function (v) {
//     console.log(v);
// });
// console.log("---------");
//
// var filterArr = [1,2,3].filter(function (v) {
//     return v > 1;
// });
// console.log(filterArr);
// console.log("---------");
//
// var mapArr = [1,2,3].map(function (v) {
//     return v*2;
// });
// console.log(mapArr);
// console.log("---------");
//
// var arr = [];
// arr[5] = "abb";
// arr[6] = "abb";
// arr[9] = "abb";
// arr["ee"] = "abb";
// var mapArr = arr.map(function (v, k) {
//     console.log(k + "..." + v);
//     return k*2;
// });
// console.log(mapArr);
// console.log("---------");
//
// var trimStr = "    hello   ";
// console.log(trimStr);
// console.log(trimStr.trim());
// console.log("---------");

// function a() {
//     console.log(this.hello == "world");
// }
// var b = a.bind({hello : "world"});
// a();
// b();

// var a = function woot() {
//
// };
// console.log(a.name);

// var woot = function () {
//     throw new Error();
// };
// woot();

function Animal() {
    console.log("Animal");
}
Animal.prototype.eat = function (food) {
    console.log(food);
};
function Ferret() {
    console.log("Ferret");
}
Ferret.prototype.__proto__ = Animal.prototype.__proto__;
Ferret.prototype.eat = function (food) {
    Animal.prototype.eat.call(this, food);
    console.log("extends");
};

// new Animal();
var ferret = new Ferret();
ferret.eat("abc");