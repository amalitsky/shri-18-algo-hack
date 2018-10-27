'use strict';

const goodString = 'aaa({[]})asad'; //'afasdf823{asdfasfsd[]}[{()}]{}(((ASFASDF)093143)1234)';
const badString = '(){}[]()adasf789asdf]';

const typeByChar = {
  '(': 1,
  ')': 1,
  '[': 2,
  ']': 2,
  '}': 3,
  '{': 3
};

const stack = [

];

const
  anyRegex = /[\[\]\{\}()]/,
  openingRegex = /[\[(\{]/;

function strChecker(str) {
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (anyRegex.test(char)) {
      if (openingRegex.test(char)) {
        stack.push(typeByChar[char]);
      } else {
        const lastOne = stack.pop();
        if (lastOne !== typeByChar[char]) {
          return false;
        }
      }
    }
  }

  return stack.length === 0;
}

console.log(strChecker(goodString));
console.log(strChecker(badString));
