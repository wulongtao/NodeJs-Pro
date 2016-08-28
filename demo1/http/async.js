/**
 * Created by raid on 2016/8/24.
 */

// var i = 0;
// while (true) {
//     i++;
// }

var c = 0;

function printIt() {
    console.log(c);
}

function plus(callback) {
    setTimeout(function () {
        c += 1;
        callback(c);
    }, 1000);
}

plus(printIt);
// printIt();