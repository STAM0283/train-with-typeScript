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

// 5)  Review and exercices :

// Exercice 1 :
let names: string;
let speed: number = 25;
let isLoading: boolean;
let ages: number | string;

// Exercice 2 : 
let myColor: Array<string> = [] // OR let myColor = string[];
myColor.push('red');
console.log(myColor); // ["red"]
let infos: (number | string | boolean)[] = [];
infos.push('dupont', true, 40);
console.log(infos) // ["dupont", true, 40]

// Exercice 3 :
let myNumber: {
  firstName: string;
  age: number;
  isLoggedIn: boolean;
}
myNumber = {
  firstName: 'Dupont',
  age: 20,
  isLoggedIn: true,
}
console.log(myNumber.age); // 20

// Exercice 4 :
let number4 = {
  firstName: 'Dupont',
  age: 20,
  isLoggedIn: true,
}
console.log(number4.age); // 20

// Exercice 5 :
let myInfos: [string, number] = ['hello', 160]; // [160, 'hello] : Error
myInfos[1] = 200; // OK
// myInfos[1] = 'salut'; : Error
myInfos.push('world');
console.log(myInfos); // "hello", 200, "world"]

// 6) Basics types : Enum :
enum Level2 {
    ADMIN, // default value = 0
    MODERATOR, // default value = 1
    SUPPORT, // default value = 2
    USER_READ_ONLY, // default value = 3
}
const users = {
  pseudo: 'Batman',
  level2: Level2.SUPPORT
}
if(users.level2 === Level2.SUPPORT) {
  console.log(`
  Bienvenue ${users.pseudo}
  Vous travaillez au service support
  ${Level2.SUPPORT}
  `);
  
}
// Change the default values ​​of the enums
enum MyLevel {
  ADMIN = 100,
  MODERATOR,
  SUPPORT = 160,
}
let admin1: string = MyLevel[101];
console.log('data1', admin1); // MODERATOR
admin1 = MyLevel[160];
console.log('data2', admin1); // SUPPORT

// 7) Basics types :  Any : it is the most flexible type, it does not impose any type
let myData: any = 'hello world';
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

let anyDataArray: any[] = [];
anyDataArray = ['world', true, 100, ['orange', 1], {age: 30}];
anyDataArray.push('hello');
console.log(anyDataArray, typeof anyDataArray); // ["world", true, 100, Array(2), {…}, "hello"] "object"

// 8)  Basics types : unknown => any and unknow are very similar : 
// - With any :
let data: any;
data = true;
console.log(typeof data); // boolean
let data2: number;
data2 = data; // OK and yet data is a bolean ! it's a flaw
console.log(typeof data2); // boolean !
// With unknow :
let data3: unknown;
data3 = 20;
console.log(typeof data3); // boolean
let data4: number;
// data4 = data3; Error : Cannot assign type 'unknown' to type 'number
// to use the unknown you need an extra check :
if(typeof data3 === 'number'){
  data4 = data3; // OK
  console.log('1',typeof data4); // number
  
}
console.log('2',typeof data4); // number

// 9) Basics types : void => void is a little like the opposite of any:

// 10) Functions types : 
function test(num: number) {
  return num + 3
}
let calculate: Function;
calculate = test; // OK 
console.log('calculate 1', calculate(20)); // 23
// calculate = 'Hello'; error => you need a function
console.log('calculate 1', calculate(20)); //
let myAge: (num: number) => number;

// 11) Functions types and parameters : 
function buildName(firstName: string, lastName: string) {
  return firstName + ' ' + lastName;
}
let result = buildName('bob'); // Error, an argument is missing
console.log(result); // bob undefined
let result2 = buildName('bob', 'adams', 'lilia'); // Error,  there is one more argument

function buildName2(firstName: string, lastName ?: string) {
  if (lastName) return firstName + ' ' + lastName;
  else return firstName
}
let result3 = buildName2('bob');
console.log(result3); // bob

// 12) Rest Parameters :
// A) without Rest Parameters
const divColors = document.getElementById('colors');
let favoritesColor = function(arg1: string, arg2: string, arg3: string, arg4: string) {
  const h1 = document.createElement('h1');
  h1.innerHTML = `Titre: ${arg1}`;
  divColors.appendChild(h1);
  const ul = document.createElement('ul');
  for(let i in arguments) {
    let li = document.createElement('li');
    li.innerHTML = arguments[i];
    ul.appendChild(li);
    
  }
  divColors.appendChild(ul);
}
favoritesColor('List 1', 'green', 'red', 'blue');
favoritesColor('List 2', 'yellow', 'white', 'black');

// B) with Rest Parameters :
const divColors2 = document.getElementById('colors2');
let favoritesColor2 = function(argument1: string, ...restOfColors: string[]) {
  const h1 = document.createElement('h1');
  
  h1.innerHTML = `Titre: ${argument1}`;
  divColors2.appendChild(h1);
  const ul = document.createElement('ul');
  for(let i in restOfColors) {
    let li = document.createElement('li');
    li.innerHTML = restOfColors[i];
    ul.appendChild(li);
    
  }
  divColors2.appendChild(ul);
}
favoritesColor2('List 1', 'green', 'red', 'blue', 'pink');
favoritesColor2('List 2', 'yellow', 'white', 'black');
// another exemple :
let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;

// 13) Callback Function Type :
function ageMember(age: number, sum: (arg: number) => void) {
  const memberAge = age + 4;
  sum(memberAge);
}
ageMember(40, (num) => console.log(num)); // 44
// 14) Union Types : 
// 15) Types Aliases :



















