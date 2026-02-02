// 1
// function sum(a, b, c, d, e) {
//   console.log(a, b, c, d, e);
//   const total = a + b + c + d + e;
//   console.log(total);
// }
// sum(1, 2, 3, 4, 5);

// 2
// function square(number) {
//   const borgo = number * number;
//   console.log('the square of number is :', borgo);
// }
// square(7);

// 3
// even
// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isEven(65));
// console.log(isEven(54));

// odd
// function isOdd(number) {
//   if (number % 2 === 1) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isOdd(78));
// console.log(isOdd(9));

// 4
// function evenSize(number) {
//   console.log(number);
//   const size = number.length;
//   console.log(size);
//   if (size % 2 === 0) {
//     console.log('even size');
//   } else {
//     console.log('odd size');
//   }
// }
// evenSize('Dhaka');
// evenSize('Baka');
// evenSize('Faka');

// 5
// function numberOfElement(numbers) {
//   const size = numbers.length;
//   return size;
// }
// const arr = numberOfElement([12, 43, 5, 7, 34, 9]);
// console.log(arr);

// 6
// function sumofArray(numbers) {
//   let sum = 0;
//   for (let number of numbers) {
//     console.log(number);
//     sum = sum + number;
//   }
//   return sum;
// }
// const numb = [23, 4, 56, 32, 76, 8, 98];
// const sum = sumofArray(numb);
// console.log('sum of numbers is:', sum);

// 7
// function multiplication(num1, num2, num3, num4) {
//   const result = num1 * num2 * num3 * num4;
//   return result;
// }
// const mult = multiplication(2, 3, 5, 8);
// console.log('the multi is:', mult);

// 8
function EvenOdd(number) {
  let result;
  if (number % 2 === 1) {
    result = number * 2;
  } else {
    result = number / 2;
  }
  return result;
}
const num = EvenOdd(6);
console.log('the result is:', num);

// 9
function make_avr(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum = sum + number;
  }
  let size = numbers.length;
  console.log(sum, size);
  const average = sum / size;
  return average;
}
const array = [12, 34, 54, 67, 87];
const avr = make_avr(array);
console.log('The average is:', avr);

// 10
function even_odd(number) {
  if (number % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}
const num1 = even_odd(35);
const num2 = even_odd(14);
const num3 = even_odd(76);
const num4 = even_odd(97);
console.log(num1, num2, num3, num4);

// 11
function count_zero(binaryString) {
  let count = 0;
  for (let number of binaryString) {
    if (number === '0') {
      count++;
    }
  }
  return count;
}
const str1 = count_zero('11001011001');
const str2 = count_zero('10110010');
const str3 = count_zero('0001101');
console.log(str1, str2, str3);
