var form = document.getElementById('signUp');
var firstName = document.getElementById('firstName');
var age = document.getElementById('age');
var gift = function (ageGift) { return (+ageGift + 3); };
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (+age.value < 18) {
        alert('inscription refusée');
    }
    else {
        alert("Bienvenue " + firstName.value + " \n    vous avez " + age.value + " ans\n    Vous aurez un cadeau qaund vous aurez " + gift(+age.value));
        firstName.value = '';
        age.value = '';
    }
});
// 1) Basics types : Number string and boolean 
var func = function (num1, num2) {
    console.log(num1 + num2);
};
func(10, 3);
var pseudo = 'superman';
console.log('longueur', pseudo.length);
var isOpen = true;
// 2) Basics types : array :
var colors = ['red', 'green', 'blue'];
var colors2 = ['orange', 'white', 'pink'];
var numbers = [1, 3, 7, 9];
var numbers2 = [3, 4, 9];
numbers2.push(7);
console.log(numbers2);
var array = [1, 3, true, 'hello', { name: 'amine', age: 23, adress: 'villeurbanne' }];
console.log(array);
var array2 = ['red', 10, 'test', 'green', 38];
array2[2] = 'heelo';
console.log(array2);
// 3) Basics types : Tuples here we specify the type of variable and the length :
var x;
x = ['hello', 3]; // correct 
// x = [3, 'hello'] : error
// x = ['hello', 3, 4] : error 
x.push(10, 'world'); // correct
console.log(x); // ["hello", 3, 10, "world"]
var member = {
    level: ['admin', 1]
};
member.level[0] = 200; // OK
console.log(member.level);
var member2 = {
    level1: ['admin', 1]
};
// member2.level1[0] = 200;  Error : tuple
member2.level1[0] = 'moderator'; // OK
member2.level1.push('director'); // OK
console.log(member2); // ["moderator", 1, "director"]
// 4) Basics types : Object :
//A) Assignation :
var car = {
    color: 'red',
    date: 2020,
    speed: 200
};
// B) Inference :
var car2 = {
    color: 'red',
    date: 2020,
    speed: 200
};
car.color = 'blue'; // OK
// car.color = 20; error
car.speed = 20; // OK
console.log(car); // {color: "blue", date: 2020, speed: 20}
// Exercice 1 :
var names;
var speed = 25;
var isLoading;
var ages;
