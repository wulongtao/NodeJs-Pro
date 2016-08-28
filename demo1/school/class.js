/**
 * Created by raid on 2016/8/22.
 */

var student = require('./student');
var teacher = require('./teacher');

// teacher.add('Scott');

function add(teacherName, students) {
    teacher.add(teacherName);
    students.forEach(function (item, index) {
        student.add(item);
    })
}

exports.add = add
