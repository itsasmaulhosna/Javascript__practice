// 1
// let string = 'Amdaer deasher name bangladesh';
// let count = 0;
// for (let i = 0; i < string.length; i++) {
//   let letter = string[i];
//   if (letter.toLowerCase() === 'a') {
//     count++;
//   }
// }
// console.log(count);

// 2
let bd = 'Amader deasher name Bangladesh. Ami amr deshk onekk valobashi.';
let count = 0;
for (let i = 0; i < bd.length; i++) {
  let letter = bd[i];
  if (letter === 'A' || letter === 'a') {
    count++;
  }
}
console.log(count);
