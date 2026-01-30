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

// 3
let bd2 =
  'Amader deasher name Bangladesh. Ami amr deshk onekk valobashi. Amder deshe onk uthsob hoy';

bd2 = bd2.toLowerCase();
let vowals = ['a', 'e', 'i', 'o', 'u'];
let allHasVowals = true;
for (let v of vowals) {
  if (!bd2.includes(v)) {
    allHasVowals = false;
    break;
  }
}
console.log(allHasVowals);
