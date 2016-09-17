/**
 * Created by raid on 2016/8/29.
 */
exports.name = "john";
exports.data = "this is some data";
var privateVariable = 5;
exports.getPrivate = function () {
    return privateVariable;
}