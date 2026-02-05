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

const lowest = [12, 5, 8, 3, 7, 9, 35];
function getLow(number) {
  let min = number[0];
  for (let value of number) {
    if (value < min) {
      min = value;
    }
  }
  return min;
}
const arr2 = getLow(lowest);
console.log('lowest value is:', arr2);

// 10
function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 5;
  const perTablerWood = 15;
  const perBedWood = 25;

  const chairTotalWood = chairQuantity * perChairWood;
  const tableTotalWood = tableQuantity * perTablerWood;
  const bedTotalWood = bedQuantity * perBedWood;
  const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
  return totalWood;
}
const wood = woodQuantity(2, 4, 3);
console.log(wood);

// 11
const phone = [
  { name: 'Samsung', price: 30000, camera: '12mp', color: 'black' },
  { name: 'Xaomi', price: 20000, camera: '12mp', color: 'black' },
  { name: 'Oppo', price: 50000, camera: '12mp', color: 'black' },
  { name: 'Iphone', price: 100000, camera: '12mp', color: 'black' },
];

function getCheapest(mobile) {
  let min = mobile[0];
  for (let phn of mobile) {
    if (phn.price < min.price) {
      min = phn;
    }
  }
  return min;
}

const cheap = getCheapest(phone);
console.log(cheap);

const phones = [
  { name: 'Samsung', price: 30000, camera: '12mp', color: 'black' },
  { name: 'Xaomi', price: 20000, camera: '12mp', color: 'black' },
  { name: 'Oppo', price: 50000, camera: '12mp', color: 'black' },
  { name: 'Iphone', price: 100000, camera: '12mp', color: 'black' },
];
function getHeigst(mobiles) {
  let high = mobiles[0];
  for (let num of mobiles) {
    if (num.price > high.price) {
      high = num;
    }
  }
  return high;
}
const heighst = getHeigst(phones);
console.log(heighst);

// 12
const products = [
  { name: 'shampoo', price: 350 },
  { name: 'cream', price: 180 },
  { name: 'lotion', price: 450 },
  { name: 'meril', price: 100 },
];

function getShoppingTotal(products) {
  let sum = 0;
  for (let product of products) {
    sum = sum + product.price;
  }
  return sum;
}
const total = getShoppingTotal(products);
console.log(total);

// 13
function discountQuantity(quantity) {
  if (quantity <= 100) {
    const total = quantity * 100;
    return total;
  } else if (quantity <= 200) {
    const total = quantity * 90;
    return total;
  } else {
    const total = quantity * 70;
    return total;
  }
}
const discount = discountQuantity(50);
console.log('total cost is:', discount);

// 14
function add(num1, num2) {
  return num1 + num2;
}
function substract(num1, num2) {
  return num1 - num2;
}
function multiplication(num1, num2) {
  return num1 * num2;
}
function divided(num1, num2) {
  return num1 / num2;
}
function calculator(a, b, operator) {
  if (operator === add) {
    const result = add(a, b);
    return result;
  } else if (operator === substract) {
    const result = substract(a, b);
    return result;
  } else if (operator === multiplication) {
    const result = multiplication(a, b);
    return result;
  } else if (operator === divided) {
    const result = divided(a, b);
    return result;
  } else {
    return 'operation is not allowed';
  }
}

const calculation = calculator(5, 7, multiplication);
console.log('the calculation is:', calculation);

// 15
function fullname(first, second) {
  if (typeof first !== 'string') {
    return 'first should be a string';
  } else if (typeof second !== 'string') {
    return 'second should be a string';
  }
  const full = first + ' ' + second;
  return full;
}
const name2 = fullname(5, 'mita');
console.log(name2);

// 16
function getArray(numbers) {
  if (Array.isArray(numbers) === false) {
    return 'please provide an array';
  }
  const second = numbers[1];
  return second;
}
const number_array = getArray([12, 76, 34, 56, 45]);
console.log(number_array);

// 17
// from celcius to fahrenhit
function celToFer(celcius) {
  let fahrenhit = (celcius * 9) / 5 + 32;
  return fahrenhit;
}
let celcius = celToFer(10);
console.log(celcius);

// 18 find number
function find(numbers, check) {
  let count = 0;
  for (let item of numbers) {
    if (item == check) {
      count++;
    }
  }
  return count;
}
const number_arr = [5, 6, 11, 12, 98, 5];
const numbers = find(number_arr, 5);
console.log(numbers);

// 19 count number of vowal in function
function countVowal(word, vowal) {
  let count = 0;
  for (let ch of word) {
    if (vowal.includes(ch)) {
      count++;
    }
  }
  return count;
}
const vowals = ['a', 'e', 'i', 'o', 'u'];
let str = 'Aswaelsojhuiavcouieai';
str = str.toLowerCase();
const string = countVowal(str, vowals);
console.log(string);

// 20 find largest word
function largestWord(string) {
  let words = string.split(' ');
  let longWord = '';
  for (let word of words) {
    if (word.length > longWord.length) {
      longWord = word;
    }
  }
  return longWord;
}
const sentence = 'I am learning Programming to become a programmer';
const st = largestWord(sentence);
console.log('the largest word is:', st);
