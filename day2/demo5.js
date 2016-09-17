/**
 * Created by raid on 2016/8/29.
 */
var EventEmitter = require("events").EventEmitter;

var MyClass = function () {

}

MyClass.prototype.__proto__ = EventEmitter.prototype;

var a = new MyClass();
/*a.on("aclick", function () {
    console.log("a event");
});*/
a.once("aclick", function () {
    console.log("a event");
});
a.emit("aclick");
a.emit("aclick");