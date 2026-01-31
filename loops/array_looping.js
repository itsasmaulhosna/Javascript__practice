// 1
// const color = ['red', 'blue', 'green', 'yellow', 'orange'];
// const reverse = [];
// for (const n of color) {
//   reverse.unshift(n);
// }
// console.log(reverse);

// 2
const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumber = [];
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumber.push(numbers[i]);
  }
}
console.log(evenNumber);

// 3
const statement = 'I am a hard working person';
const statementArr = statement.split(' ');
const reverseArr = statementArr.reverse().join(' ');
console.log(reverseArr);
