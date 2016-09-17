/**
 * Created by raid on 2016/8/29.
 */
var EventEmitter = require("events").EventEmitter;

var a = new EventEmitter();
a.on('event', function () {
    console.log("event called");
});
a.emit("event");