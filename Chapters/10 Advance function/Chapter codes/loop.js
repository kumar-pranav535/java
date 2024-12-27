let array = [3,5,7,9];
for (let i =0; i < array.length; i++) {
  console.log(array[i]);
}
array.forEach ((num) => console.log(num));

let arr = [1,2,3,4,5,6,7,8,9,];
/*arr.forEach(num => {
  if (num == 5) {
    return;
  }
  console.log(`visted:${num}`);
});*/
function search (arr, num) {
  for (let i = 0; i< arr.length; i++) {
    if (arr[i] == num) {
      console.log(`element found at:${i}`);
      return;
    }
  }
  console.log('Element was not found');
}
search(arr,8);