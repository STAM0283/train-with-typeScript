var form = document.getElementById('signUp');
var firstName = document.getElementById('firstName') as HTMLInputElement;
var age = document.getElementById('age') as HTMLInputElement;

var gift = (ageGift: number) => (+ageGift + 3);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (+age.value < 18) {
    alert('inscription refusée');
  } else {
    alert(`Bienvenue ${firstName.value} 
    vous avez ${age.value} ans
    Vous aurez un cadeau qaund vous aurez ${gift(+age.value)}`);
    firstName.value = '';
    age.value = '';
  }
});
// 1) Basics types : Number string and boolean 

const func = (num1: number, num2: number) => {
  console.log(num1 + num2);
}
func(10, 3);
let pseudo: string = 'superman';
console.log('longueur', pseudo.length);
let isOpen: boolean = true;

// 2) Basics types : array :

let colors: string[] = ['red', 'green', 'blue'];
let colors2: Array<string> = ['orange', 'white', 'pink'];
let numbers: number[] = [1, 3, 7, 9];
let numbers2: Array<number> = [3, 4, 9];
numbers2.push(7);
console.log(numbers2);
let array: any[] = [1, 3, true, 'hello', {name: 'amine', age: 23, adress: 'villeurbanne'}];
console.log(array);
let array2: (string | number)[] = ['red', 10, 'test', 'green', 38];
array2[2] = 'heelo';
console.log(array2); 

// 3) Basics types : Tuples here we specify the type of variable and the length :

let x: [string, number];
x = ['hello', 3]; // correct 
// x = [3, 'hello'] : error
// x = ['hello', 3, 4] : error 
x.push(10, 'world'); // correct
console.log(x); // ["hello", 3, 10, "world"]

const member = {
  level: ['admin', 1]
}
member.level[0] = 200; // OK
console.log(member.level);

const member2: {
  level1: [string, number]
} = {
  level1: ['admin', 1]
}
// member2.level1[0] = 200;  Error : tuple

member2.level1[0] = 'moderator' // OK
member2.level1.push('director'); // OK
console.log(member2);  // ["moderator", 1, "director"]

// 4) Basics types : Object :
//A) Assignation :

let car: {
  color: string;
  date: number;
  speed: number;
} = {
  color: 'red',
  date: 2020,
  speed: 200
}
// B) Inference :
let car2 = {
  color: 'red',
  date: 2020,
  speed: 200
}
car.color = 'blue'; // OK
// car.color = 20; error
car.speed = 20; // OK
console.log(car); // {color: "blue", date: 2020, speed: 20}

// Exercice 1 :
let names: string;
let speed: number = 25;
let isLoading: boolean;
let ages: number | string;







