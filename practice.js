// if (3 < 10) {
//   console.log('give me a pen');
// }
// var apple = 250;
// if (apple > 300) {
//   console.log('give me apple');
// }
// var weight = 40;
// if (weight < 20) {
//   console.log('i will acrry it by myself');
// } else {
//   console.log('i will rent a rickshaw');
// }
// const salary = 25000;
// const height = 61;
// const weight = 60;
// if (salary > 20000 || height > 66) {
//   console.log('good');
// } else {
//   console.log('bad');
// }
// const price = 5000;
// if (price >= 5000) {
//   const discount = (price * 10) / 100;
//   console.log(discount);
//   const payAmmount = price - discount;
//   console.log(payAmmount);
// }
// const price = 500;
// const age = 22;

// if (age <= 12) {
//   console.log('free');
// } else if (age > 50) {
//   const discount = (price * 50) / 100;
//   const payAmmount = price - discount;
//   console.log(payAmmount);
// } else {
//   console.log(price);
// }
// const age = 18;
// age >= 20 ? console.log('vote deo') : console.log('ghumai thako');
// const price = 500;
// const isLeader = true;
// price = isLeader === true ? 0 : price + 100;
// const isPassed = true;
// if (!isPassed) {
//   console.log('biya diya dimu');
// } else {
//   console.log('valo meye');
// }
// const numbers = [
//   12, 34, 56, 98, 9, 34, 677, 34, 23, 98, 45, 34, 13, 45, 56, 34, 65, 76, 87,
//   788, 56,
// ];
// console.log(numbers[6]);
// numbers.push(23, 89);
// console.log(numbers);

// const number = [12, 45, 76, 98, 34, 56];
// number.shift();
// number.unshift(55);
// console.log(number);

// string
// const school = 'Raj Uk Uttra Model School';
// console.log(school);
// console.log(school.toLowerCase());

// const drink = ' water ';
// const liquid = 'water';
// if (drink.trim() === liquid.trim()) {
//   console.log('panir opr nam jibn');
// } else {
//   console.log('not jibn');
// }

// const address = 'asjhdkldyranjhdflahfyt';
// const part = address.slice(3, 7);
// console.log(part);

// const sentence = 'I am a good hardworking person';
// console.log(sentence.split(' '));

// const first = 'Abid';
// const second = 'Nabid';
// const fullname = first + ' ' + second;
// // console.log(fullname);
// console.log(second.includes('b'));

// reverse
// const sentence = 'I am learning web dev';
// const reversed = sentence.split(' ').reverse().join(' ');
// console.log(reversed);

// object
const person = {
  name: 'maya',
  age: 22,
  profession: 'devloper',
  married: false,
  salary: 50000,
};
// console.log(person.age);
// person.salary = 20000;
// person['age'] = 25;
// console.log(person);

// const computer = {
//   brand: 'apple',
//   price: 88000,
//   procesor: 'itel',
//   hdd: '521gb',
// };
// const keys = Object.keys(computer);
// console.log(keys);

// const values = Object.values(computer);
// console.log(values);

// const college = {
//   name: 'ggmc',
//   class: ['11', '12'],
//   special: ['sciencefair', 'boishakh', 'bijoymela'],
//   unique: {
//     color: 'blue',
//     result: {
//       gpa: 5,
//       merit: 'top',
//     },
//   },
// };
// college.unique.result.merit = 'top top top most';
// console.log(college.unique.result);

// onject looping

// const mobile = {
//   brand: 'apple',
//   price: 50000,
//   camera: '12mp',
//   color: 'black',
// };
// const keys = Object.keys(mobile);
// console.log(keys);
// for (const key of keys) {
//   console.log(key, ':', mobile[key]);
// }

// string conceputal
// let str = 'Programming Hero';
// console.log(str.length);
// let str2 = 'Programming hero';
// console.log(str === str2);
// console.log(str.toLowerCase());
// console.log(str.toLowerCase().trim() === str2.toLowerCase());

// slice
// console.log(str.slice(2, 6));

// include
// console.log(str2.includes('hero'));
// concat
// let newStr = str.concat(str2);
// console.log(newStr);

// replace
// let bd = 'I love bangladesh';
// console.log(bd.replace('I', 'we'));

// split
// let bd = 'I love bangladesh';
// let bdArr = bd.split(' ');
// let reverseArr = bdArr.reverse();
// console.log(reverseArr);

// letter count
// let count = 0;
// let college = 'Our college name is gazipur govt. mohila college. ';
// for (let i = 0; i < college.length; i++) {
//   let letter = college[i];
//   if (letter.toLowerCase() == 'g') {
//     count++;
//   }
// }
// console.log(count);

// array reverse
// let num = [1, 2, 3, 4, 5, 6, 7];
// let reverse_num = [];
// for (let numbers of num) {
//   // console.log(numbers);
//   reverse_num.unshift(numbers);
// }

// console.log(reverse_num);

// sort
// const numbers = [2, 43, 12, 8, 55, 9, 7];
// const numbers_acs = [...numbers].sort(function (a, b) {
//   return a - b;
// });
// const numbers_dcs = [...numbers].sort(function (a, b) {
//   return b - a;
// });
// console.log(numbers_dcs);

// onject comceptual
let bike = {
  color: 'black',
  brand: 'honda',
  cc: 150,
  pillion: 2,
  isDigital: true,
  advantage: ['less millage', 'high speed'],
};
// console.log(bike.color);
// console.log(bike['advantage']);
// for (let key in bike) {
//   console.log(key, ' ', bike[key]);
// }

// let bikeKeys = Object.keys(bike);
// console.log(bikeKeys.length);
// for (let i = 0; i < bikeKeys.length; i++) {
//   let key = bikeKeys[i];
//   let values = bike[key];
//   console.log(bikeKeys[i], ':', values);
// }

// function
// square
// function square(number) {
//   const borgo = number * number;
//   console.log('the square of number is :', borgo);
// }
// square(7);

// sum
function sum(a, b, c, d, e) {
  console.log(a, b, c, d, e);
  const total = a + b + c + d + e;
  console.log(total);
}
sum(1, 2, 3, 4, 5);

// return
function tenTime(number) {
  const result = number * 10;
  return result;
}
const output = tenTime(2);
console.log(output);

function doMath(num1, num2) {
  const sum = num1 + num2;
  const diff = num1 - num2;
  const mult = num2 * diff;
  const result = mult / 2;
  return result;
}
const result = doMath(50, 3);
console.log(result);

// conditional return

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(5));
console.log(isEven(54));

// odd
function isOdd(number) {
  if (number % 2 === 1) {
    return true;
  } else {
    return false;
  }
}
console.log(isOdd(7));
console.log(isOdd(68));

// size
function evenSize(str) {
  const length = str.length;
  console.log(str, length);
  if (length % 2 === 0) {
    console.log('even size');
  } else {
    console.log('odd size');
  }
}
evenSize('Dhaka');

// function numberOfElement(number) {
//   const size = number.length;
//   return size;
// }
// const arr = numberOfElement([12, 34, 45, 65, 76, 24]);
// console.log(arr);

// sum of array
// function sumofArray(numbers) {
//   let sum = 0;
//   for (let number of numbers) {
//     console.log(number);
//     sum = sum + number;
//   }
//   return sum;
// }
// const numb = [12, 34, 54, 24, 65];
// const sum = sumofArray(numb);
// console.log('sum of array is:', sum);

// sum even number
function sumEven(numbers) {
  let evens = [];
  for (number of numbers) {
    if (number % 2 === 0) {
      console.log(number);
      evens.push(number);
    }
  }
  return result;
}
numb = [12, 34, 65, 4, 8, 6, 9, 54, 11, 21, 13, 19];
const total = sumEven(numb);
console.log(total);
