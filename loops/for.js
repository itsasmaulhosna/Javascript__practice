// 1
for (let i = 0; i <= 60; i++) {
  console.log(
    'I will invest at least 6 hrs every single day for next 60 days!',
  );
}
// 2
// odd number
for (let i = 61; i <= 100; i++) {
  console.log(i);
  if (i % 2 !== 0) {
    console.log('odd number', i);
  }
}
// even number
for (let i = 8; i <= 98; i++) {
  console.log(i);
  if (i % 2 !== 1) {
    console.log('even number', i);
  }
}
// 3
// sum of odd number
let sum = 0;
for (let i = 91; i <= 129; i++) {
  console.log(i);
  if (i % 2 !== 0) {
    console.log('odd number', i);
    sum = sum + i;
  }
}
console.log('the sum is', sum);
// sum of even number
let total = 0;
for (let i = 51; i <= 85; i++) {
  console.log(i);
  if (i % 2 === 0) {
    console.log('even number', i);
    total = total + i;
  }
}
console.log('the total is', total);

// 4
let n = 9;
for (i = 1; i <= 10; i++) {
  console.log(9 * i);
}
// 5
for (let i = 85; i >= 61; i--) {
  console.log(i);
}
