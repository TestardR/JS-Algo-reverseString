// 1. String reversal

const str = 'algorithms';

// function reverseString(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

// function reverseString(str) {
//   return [...str].reverse().join('');
// }

// function reverseString(str) {
//   let result = '';

//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }

//   return result;
// }

// function reverseString(str) {
//   let result = '';

//   for (char of str) {
//     result = char + result;
//   }

//   return result;
// }

// function reverseString(str) {
//   if (str === '') {
//     return '';
//   } else {
//     return reverseString(str.substr(1)) + str[0];
//   }
// }

// function reverseString(str) {
//   return str.split('').reduce((acc, char) => char + acc, '');
// }

function reverseString(str) {
  return [...str].reduce((acc, char) => char + acc, '');
}

console.log(reverseString(str));
