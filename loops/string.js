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
// let bd2 =
//   'Amader deasher name Bangladesh. Ami amr deshk onekk valobashi. Amder deshe onk uthsob hoy';

// bd2 = bd2.toLowerCase();
// let vowals = ['a', 'e', 'i', 'o', 'u'];
// let allHasVowals = true;
// for (let v of vowals) {
//   if (!bd2.includes(v)) {
//     allHasVowals = false;
//     break;
//   }
// }
// console.log(allHasVowals);

// 4
// let string = 'Aj amder exam hbe. Xm e vlo mark pete hbe';
// let newString = '';
// for (i = 0; i < string.length; i++) {
//   if (string[i] === 'x') {
//     newString += 'y';
//   } else if (string[i] === 'X') {
//     newString += 'Y';
//   } else {
//     newString += string[i];
//   }
// }
// console.log(newString);

// 5
let str = "i am student of mist. i'm learning web deb.";
let words = str.split(' ');
let result = '';
for (let i = 0; i < words.length; i++) {
  let word = words[i];
  result += word[0].toUpperCase() + word.slice(1) + ' ';
}
console.log(result.trim());
