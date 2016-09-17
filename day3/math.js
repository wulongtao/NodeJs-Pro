/**
 * Created by raid on 2016/9/2.
 */
exports.add = function () {
    var sum = 0,i=0,args=arguments,l=arguments.length;
    while (i < l) {
        sum += args[i++];
    }
    return sum;
};