const form = document.getElementById('signUp');
const firstName = document.getElementById('firstName') as HTMLInputElement;
const age = document.getElementById('age') as HTMLInputElement;

const gift = (ageGift: number) => (+ageGift + 3);

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
