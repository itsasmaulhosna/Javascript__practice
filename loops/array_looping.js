// 1
const color = ['red', 'blue', 'green', 'yellow', 'orange'];
const reverse = [];
for (const n of color) {
  reverse.unshift(n);
}
console.log(reverse);

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
console.log(`'${reverseArr}'`);

// 4
const orginal = [1, 2, 3];
const copy = [];

for (let i = 0; i < orginal.length; i++) {
  copy.push(orginal[i]);
  copy[0] = 99;
}
console.log(orginal);
console.log(copy);

// 5
var number = ['Tom', 'Tim', 'Tin', 'Tik'];
var result = number.join('');
console.log(`'${result}'`);
