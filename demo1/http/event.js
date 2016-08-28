/**
 * Created by raid on 2016/8/24.
 */
function clickIt(e) {
    window.alert('Button is clicked');
}

var button = document.getElementById('#button');
button.addEventListener('listener', clickIt);

