// 1
function sum(a, b, c, d, e) {
  console.log(a, b, c, d, e);
  const total = a + b + c + d + e;
  console.log(total);
}
sum(1, 2, 3, 4, 5);

// 2
function square(number) {
  const borgo = number * number;
  console.log('the square of number is :', borgo);
}
square(7);

// 3
// even
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(65));
console.log(isEven(54));

// odd
function isOdd(number) {
  if (number % 2 === 1) {
    return true;
  } else {
    return false;
  }
}
console.log(isOdd(78));
console.log(isOdd(9));

// 4
function evenSize(number) {
  console.log(number);
  const size = number.length;
  console.log(size);
  if (size % 2 === 0) {
    console.log('even size');
  } else {
    console.log('odd size');
  }
}
evenSize('Dhaka');
evenSize('Baka');
evenSize('Faka');
