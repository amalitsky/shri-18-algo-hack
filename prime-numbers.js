'use strict';

function getPrimeNumbers(upperBoundary) {
  const res = [2];

  for (let i = 3; i <= upperBoundary; i += 2) {
    let isPrimary = true;

    for (let j = 0; j < res.length; j++) {
      if (!(i % res[j])) {
        isPrimary = false;
        break;
      }
    }

    if (isPrimary) {
      res.push(i);
    }
  }

  return res;
}

console.log(
  getPrimeNumbers(100)
);
