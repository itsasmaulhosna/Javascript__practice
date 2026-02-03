// 1
function inchTofeet(inch) {
  const result = inch / 12;
  return result;
}
const maya = inchTofeet(64);
console.log(maya);

// 2
function mileTokilo(mile) {
  const kilo = mile * 1.60934;
  return kilo;
}
const ans = mileTokilo(234);
console.log(ans);

function kiloTomile(kilo) {
  const mile = kilo * 0.62134;
  return mile;
}
const ans2 = mileTokilo(675);
console.log(ans2);

// 3 leap year

function isLeapyear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
const leap = isLeapyear(2045);
console.log(leap);

function isLeapyear2(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
const leap1 = isLeapyear2(2308);
const leap2 = isLeapyear2(2400);
const leap3 = isLeapyear2(2100);
const leap4 = isLeapyear2(2052);
console.log(leap1, leap2, leap3, leap4);

// 4
function oddAver(numbers) {
  const odd = [];
  for (let number of numbers) {
    if (number % 2 === 1) {
      odd.push(number);
    }
  }
  //   console.log(odd);
  let sum = 0;
  for (let number of odd) {
    sum = sum + number;
  }
  let size = odd.length;
  console.log(sum, size);
  const avr = sum / size;
  return avr;
}
const num = [12, 34, 54, 56, 65, 35, 13];
const avr = oddAver(num);
console.log('the average is :', avr);

// // 5
const array = [1, 3, 1, 4, 2, 3, 5, 7, 5, 4];
function noDuplicate(numbers) {
  const unique = [];
  for (let items of numbers) {
    if (unique.includes(items) === false) {
      unique.push(items);
    }
  }
  return unique;
}
const numb = noDuplicate(array);
console.log(numb);

// // 6

const max = Math.max(12, 445, 65, 877, 34, 56, 98);
console.log(max);
console.log(Math.PI);
console.log(Math.round(2.87));
console.log(Math.abs(-48));
console.log(Math.floor(2.99));
console.log(Math.ceil(2.01));
const ran = Math.round(Math.random() * 10);
console.log(ran);

// // 7

// swap
let a = 5;
let b = 7;
let temp = a;
a = b;
b = temp;
console.log(a, b);

let x = 5;
let y = 3;
console.log(x, y);
[x, y] = [y, x];
console.log(x, y);

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 100);
// }

// 8
function getMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
const number = getMax(76, 87);
console.log('the number is:', number);

const jim = 345;
const tim = 234;
const him = 987;
if (jim > tim && jim > him) {
  console.log('jim get it');
} else if (tim > jim && tim > him) {
  console.log('tim get it');
} else {
  console.log('him get it');
}

function getMax2(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}
const number2 = getMax2(235, 876, 904);
console.log('the max number is:', number2);

// 9

const heights = [98, 54, 76, 99, 23, 87];
function getMax3(numbers) {
  let max = numbers[0];
  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
const arr = getMax3(heights);
console.log('the max number is', arr);

// const lowest = [12, 5, 8, 3, 7, 9, 35];
// function getLow(number) {
//   let min = number[0];
//   for (let value of number) {
//     if (value < min) {
//       min = value;
//     }
//   }
//   return min;
// }
// const arr2 = getLow(lowest);
// console.log('lowest value is:', arr2);

// 10
// function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
//   const perChairWood = 5;
//   const perTablerWood = 15;
//   const perBedWood = 25;

//   const chairTotalWood = chairQuantity * perChairWood;
//   const tableTotalWood = tableQuantity * perTablerWood;
//   const bedTotalWood = bedQuantity * perBedWood;
//   const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
//   return totalWood;
// }
// const wood = woodQuantity(2, 4, 3);
// console.log(wood);

// 11
