/**
 * Created by raid on 2016/8/29.
 */
module.exports = Person;

function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    console.log("name=" + this.name);
}