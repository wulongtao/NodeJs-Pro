/**
 * Created by raid on 2016/8/24.
 */

var globalVariable = 'This is global variable';

function globalFunction() {
    var localVariable = 'This is local variable';
    console.log('Visit global/local variable');
    console.log(globalVariable);
    console.log(localVariable);
}

globalFunction();