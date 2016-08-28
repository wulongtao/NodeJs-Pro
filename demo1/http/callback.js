/**
 * Created by raid on 2016/8/24.
 */
function learn(something) {
    console.log(something);
}

function we(callback, somthing) {
    somthing += ' is cool';
    callback(somthing);
}

we(learn, 'Nodejs');

we(function (something) {
    console.log(something);
}, 'Jade');