let arr = [1,2,3,4,5,6,7,8,9];
let odds = arr.filter((num, index) => {
  if (num % 2 === 1) {
    return true;
  } else {
    return false;
  }
});
let newOdds = arr.filter((num, index) => num % 2 === 1);
console.log(newOdds);
let squares = arr.map(num => num*num);
console.log(squares);