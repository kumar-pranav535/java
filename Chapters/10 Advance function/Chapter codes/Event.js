let buttonElement = document.querySelector('#my-button');
let behaviour = Event => console.log('I am clicked');
buttonElement.addEventListener('click', behaviour );
let printDate = event => console.log(new Date ());
buttonElement.addEventListener('click', printDate);
buttonElement.removeEventListener('click', behaviour);