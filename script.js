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
// 5)  Review and exercices :
// Exercice 1 :
var names;
var speed = 25;
var isLoading;
var ages;
// Exercice 2 : 
var myColor = []; // OR let myColor = string[];
myColor.push('red');
console.log(myColor); // ["red"]
var infos = [];
infos.push('dupont', true, 40);
console.log(infos); // ["dupont", true, 40]
// Exercice 3 :
var myNumber;
myNumber = {
    firstName: 'Dupont',
    age: 20,
    isLoggedIn: true
};
console.log(myNumber.age); // 20
// Exercice 4 :
var number4 = {
    firstName: 'Dupont',
    age: 20,
    isLoggedIn: true
};
console.log(number4.age); // 20
// Exercice 5 :
var myInfos = ['hello', 160]; // [160, 'hello] : Error
myInfos[1] = 200; // OK
// myInfos[1] = 'salut'; : Error
myInfos.push('world');
console.log(myInfos); // "hello", 200, "world"]
// 6) Basics types : Enum :
var Level2;
(function (Level2) {
    Level2[Level2["ADMIN"] = 0] = "ADMIN";
    Level2[Level2["MODERATOR"] = 1] = "MODERATOR";
    Level2[Level2["SUPPORT"] = 2] = "SUPPORT";
    Level2[Level2["USER_READ_ONLY"] = 3] = "USER_READ_ONLY";
})(Level2 || (Level2 = {}));
var users = {
    pseudo: 'Batman',
    level2: Level2.SUPPORT
};
if (users.level2 === Level2.SUPPORT) {
    console.log("\n  Bienvenue " + users.pseudo + "\n  Vous travaillez au service support\n  " + Level2.SUPPORT + "\n  ");
}
// Change the default values ​​of the enums
var MyLevel;
(function (MyLevel) {
    MyLevel[MyLevel["ADMIN"] = 100] = "ADMIN";
    MyLevel[MyLevel["MODERATOR"] = 101] = "MODERATOR";
    MyLevel[MyLevel["SUPPORT"] = 160] = "SUPPORT";
})(MyLevel || (MyLevel = {}));
var admin1 = MyLevel[101];
console.log('data1', admin1); // MODERATOR
admin1 = MyLevel[160];
console.log('data2', admin1); // SUPPORT
// 7) Basics types :  Any : it is the most flexible type, it does not impose any type
var myData = 'hello world';
console.log(myData + ' ' + typeof myData); // hello world string
myData = 20;
console.log(myData + ' ' + typeof myData); // 20 number
myData = true;
console.log(myData + ' ' + typeof myData); // true boolean
myData = [1, 2, 'hello'];
console.log(myData + ' ' + typeof myData); // 1,2,hello object
myData = {
    myColors: ['red', 'green', 'blue']
};
console.log(myData.myColors + ' ' + typeof myData); // red,green,blue object
var anyDataArray = [];
anyDataArray = ['world', true, 100, ['orange', 1], { age: 30 }];
anyDataArray.push('hello');
console.log(anyDataArray, typeof anyDataArray); // ["world", true, 100, Array(2), {…}, "hello"] "object"
