/*let alarm = function() {
  console.log('wake up ,good morning.');
};
setTimeout(alarm, 5000 );
console.log('Alarm set');*/

let alarm = () => console.log(`wake up ,good morning. ${new Date()}`);
/*let timerId = setTimeout(alarm, 5000 );
console.log(`Alarm set with timerID:${timerId}`);
clearTimeout(timerId);*/

let intervalId = setInterval(alarm, 2000);
setTimeout(() => clearInterval(intervalId), 6000);