/**
 * Created by raid on 2016/8/28.
 * 函数
 */

// var a = function () {
//     console.log("abc");
//     return "func";
// };
// console.log(a());

// var a = function a() {
//     console.log('function' == typeof a);
//     console.log(typeof a);
// }
//
// a();

//控制台会报错，因为浏览器才有window
// function a() {
//     console.log(window == this);
// }
// a();

// function a() {
//     console.log(this.a=='b');
// }
// a.call({a:'b'});

// var a =function (a, b, c){};
// console.log(a.length);

// var a = 5;
// function woot() {
//     console.log(a == 5);
//     var a = 6;
//     function test() {
//         console.log(a == 6);
//     }
//     test();
// }
// woot();

// var a = 3;
// (function () {
//     a = 5;
// })();
// console.log(a);

// function Animal() {
//     console.log("create animal");
// }
// Animal.prototype.eat = function (food) {
//     console.log("eat " + food);
// };
// var animal = new Animal();
// animal.eat("abc");
//
// function Animal(name) {
//     this.name = name;
// }
// Animal.prototype.getName = function (){
//     return this.name;
// };
// var animal = new Animal("tobi");
// console.log(animal.getName());
// animal.eat("anc");
//
// function Ferret() {
//
// }
// Ferret.prototype = new Animal();
// Ferret.prototype.type = 'domestic';
// Ferret.prototype.eat = function (food) {
//     Animal.prototype.eat.call(this, food);
//     console.log("extends");
// };
//
// var animal = new Animal();
// var ferret = new Ferret();
// ferret.eat("extends");
//
// console.log(animal instanceof Animal);
// console.log(animal instanceof Ferret);
//
// console.log(ferret instanceof Animal);
// console.log(ferret instanceof Ferret);

// function Animal(a) {
//     if (false !== a) {
//         return ;
//     }
//     console.log("create");
// }
// function Ferret() {
//
// }
// Ferret.prototype = new Animal();
// new Ferret();

// function Animal() {
//     console.log("Animal");
// }
// function Ferret() {
//     console.log("Ferret");
// }
// function f() {
// }
// f.prototype = Animal.prototype;
// Ferret.prototype = new f();
//
// new Ferret();