// 1
for (let i = 1; i <= 200; i++) {
  if (i === 100) {
    break;
  }
  console.log(i);
}

// 2
let i = 1;
let sum = 0;
while (sum < 100) {
  sum += i;
  if (sum >= 100) {
    break;
  }
  console.log(sum);
}
