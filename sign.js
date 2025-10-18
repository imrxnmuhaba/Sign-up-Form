const form = document.querySelector('form');
form.addEventListener('submit', signUp)
function signUp(e){
  e.preventDefault();

const data = new FormData(form);
console.log(data.get('firstName'));// the firsName is the name of the input not the id.
console.log(data.get('lastName'));
console.log(data.get('email'));
console.log(data.get('number'));
console.log(data.get('password'));
console.log(data.get('confirmPassword'));
}
