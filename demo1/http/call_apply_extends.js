/**
 * Created by raid on 2016/8/24.
 */

function Pet(words) {
    this.words = words;

    this.speak = function () {
        console.log(this.words);
    }
}

function Dog(words) {
    Pet.call(this, words);
}

var dog = new Dog('Wang');
dog.speak();