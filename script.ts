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


