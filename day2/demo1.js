/**
 * Created by raid on 2016/8/29.
 */

function A() {
    console.log("create a");
}

A.prototype.show = function () {
    console.log("show");
};

function B() {
    console.log("create b");
}

B.prototype.__proto__ = A.prototype;

new B().show();