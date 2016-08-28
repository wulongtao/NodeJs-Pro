/**
 * Created by raid on 2016/8/24.
 */

var pet = {
    words : '...',
    speak : function (say) {
        console.log(say + ' ' + this.words);
    }
};

// pet.speak('Speak');

var dog = {
    words : 'Wang',
};

pet.speak.call(dog, 'Speak');
