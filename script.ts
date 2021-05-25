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
//Number string and boolean 
const func = (num1: number, num2: number) => {
  console.log(num1 + num2);
}
func(10, 3);
let pseudo: string = 'superman';
console.log('longueur', pseudo.length);
let isOpen: boolean = true;

// Basics types : array :
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


