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
//Number string and boolean 
var func = function (num1, num2) {
    console.log(num1 + num2);
};
func(10, 3);
var pseudo = 'superman';
console.log('longueur', pseudo.length);
var isOpen = true;
// Basics types : array :
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
