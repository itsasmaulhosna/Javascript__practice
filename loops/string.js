let string = 'Amdaer deasher name bangladesh';
let count = 0;
for (let i = 0; i < string.length; i++) {
  let letter = string[i];
  if (letter.toLowerCase() === 'a') {
    count++;
  }
}
console.log(count);
