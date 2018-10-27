const test = [3, 45, 6, 7, 0, 1, 21, 11, 99, 6, 7, 3];
const test2 = [0, 1, 3, 3, 6, 6, 7, 7, 11, 21, 45, 99].reverse();

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

console.log(bubbleSort(test));
console.log(bubbleSort(test2));
