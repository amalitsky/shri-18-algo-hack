'use strict';

/*const test = [3, 45, 6, 7, 0, 1, 21, 11, 99, 6, 7, 3];
const test2 = [0, 1, 3, 3, 6, 6, 7, 7, 11, 21, 45, 99].reverse();
const test3 = [0, 1, 3, 3, 6, 6, 7, 7, 11, 21, 45, 99];*/

function swapArrElements(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bubbleSort(arr) {
  const {length} = arr;

  for (let j = length; j >= 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        swapArrElements(arr, i + 1, i);
      }
    }
  }

  return arr;
}

function selectionSort(arr) {
  const {length} = arr;
  let max;
  let maxIndex;

  for (let j = length; j > 0; j--) {
    max = -Infinity;
    maxIndex = NaN;

    for (let i = 0; i < j; i++) {
      if (arr[i] > max) {
        max = arr[i];
        maxIndex = i;
      }
    }

    if (maxIndex !== j - 1) {
      swapArrElements(arr, j - 1, maxIndex);
    }
  }

  return arr;
}

function insertionSort(arr) {
  const {length} = arr;

  for (let j = length - 1; j >= 1; j--) {
    if (arr[j - 1] > arr[j]) {
      const elem = arr[j - 1];
      for (let i = j; i <= length; i++) {
        if (elem <= arr[i] || i === length) {
          arr[i - 1] = elem;
          break;
        } else {
          arr[i - 1] = arr[i];
        }
      }
    }
  }

  return arr;
}

const nodesHash = {};

new Array(9).fill()
  .forEach((id, index) => {
    const value = index + 1;
    nodesHash[value] = {
      value,
      children: []
    };
  });

const children = {
  1: [2, 3, 4],
  2: [5, 6],
  4: [7, 8, 9]
};

Object.keys(children).forEach(id => {
  nodesHash[id].children.push(
    ...children[id].map(id => nodesHash[id])
  );
});

function dfs(root) {
  console.log(root.value);
  root.children
    .forEach(child => dfs(child));
}

const queue = [
  nodesHash[1]
];

function bfs() {
  const elem = queue.shift();
  console.log(elem.value);
  queue.push(...elem.children);
}

/*while (queue.length) {
  bfs();
}*/

const string = 'hyu';

/*console.log(insertionSort(test));
console.log(insertionSort(test2));
console.log(insertionSort(test3));*/
