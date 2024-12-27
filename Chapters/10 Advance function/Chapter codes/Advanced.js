let sum = function (num1, num2) {
  return num1 + num2;
};
console.log(sum(4,6));


let sumThreeNumbers =  function(num1,num2,num3, sumTwoNumbers) {
  let sum1 = sumTwoNumbers(num1, num2);
  return sumTwoNumbers(sum1, num3);
}
console.log(sumThreeNumbers(4,6,8, sum));

console.log(sumThreeNumbers);
console.log(typeof sumThreeNumbers);