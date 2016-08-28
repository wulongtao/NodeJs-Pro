/**
 * Created by raid on 2016/8/22.
 */
var klass = require('./class');
klass.add('Scott', ['abc', 'eft']);

exports.add = function (kclasses) {
    kclasses.forEach(function (item, index) {
        var  _klass = item;
        var teacherName = item.teacherName;
        var students = item.students;
        klass.add(teacherName, students);
    });
};