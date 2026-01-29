// 1
for (i = 1; i <= 40; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

// 2
for (let i = 55; i <= 85; i++) {
  if (i % 2 === 0) {
    continue;
  }
  if (i % 5 === 0) {
    continue;
  }
  console.log(i);
}
