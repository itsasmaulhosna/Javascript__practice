let burger = 700;
if (burger <= 500) {
  console.log('Free');
} else {
  console.log('coke is 30tk');
}
// // BMI
let BMI = 50;
if (BMI < 18.5) {
  console.log('underweight');
} else if (BMI >= 18.5 && BMI <= 24.5) {
  console.log('normal');
} else if (BMI >= 25 && BMI <= 29.5) {
  console.log('overweight');
} else {
  console.log('obese');
}

// // marks
let marks = 50;
if (marks >= 90 && marks <= 100) {
  console.log('you got A');
} else if (marks >= 80 && marks <= 89) {
  console.log('you got B');
} else if (marks >= 70 && marks <= 79) {
  console.log('you got C');
} else if (marks >= 60 && marks <= 69) {
  console.log('you got D');
} else {
  console.log('you got F');
}
// friend

const yourScore = 80;
const friendScore = 50;
if (yourScore >= 80) {
  if (friendScore > 80) {
    console.log('go for lunch');
  } else if (friendScore < 80 && friendScore >= 60) {
    console.log('good luck next time');
  } else if (friendScore < 60 && friendScore >= 40) {
    console.log('unseen message');
  } else {
    console.log('block your friend');
  }
} else {
  console.log('go home and sleep ');
}
// tenary
let num1 = 5;
let num2 = 3;
if (num1 > num2) {
  console.log(2 * num1);
} else {
  console.log(num1 + num2);
}

let result = num1 > num2 ? 2 * num1 : num1 + num2;
// ticket

const ticketPrice = 500;
let age = 70;
if (age < 10) {
  console.log('free');
} else if (age < 25) {
  const discount = (ticketPrice * 50) / 100;
  const payAmmount = ticketPrice - discount;
  console.log(payAmmount);
} else if (age <= 60) {
  const discount = (ticketPrice * 15) / 100;
  const payAmmount = ticketPrice - discount;
  console.log(payAmmount);
} else {
  console.log(800);
}
