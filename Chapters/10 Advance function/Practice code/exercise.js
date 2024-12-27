let multiply = (num1, num2) => num1 * num2;
console.log(multiply(5,6));
let printHellow = () => console.log('Hii..');
let runThrice = callFunction => {
  callFunction();
  callFunction();
  callFunction();
};
runThrice(printHellow);
function doubleTheSize() {
  let buttonElement = document.querySelector('.btn');
  buttonElement.classList.add('js-size-double');
}
let buttonElement = document.querySelector('.btn');
buttonElement.addEventListener('click',eventv=> 
  setTimeout(doubleTheSize, 2000))
  let arr = [1,2,3,4,5,6,7,8,9];
  let sum = 0;
  arr.forEach(num => sum += num);
  console.log(sum);
  let squares = arr.map(num => num * num);
  console.log(squares);