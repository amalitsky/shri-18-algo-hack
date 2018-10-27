const test = [3, 45, 6, 7, 0, 1, 21, 11, 99, 6, 7, 3];

function swapArrElements(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bubbleSort(arr) {
  const {length} = arr;

  for (let j = 0; j < length; j++) {
    for (let i = 0; i < length - j - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swapArrElements(arr, i + 1, i);
      }
    }
  }

  return arr;
}

console.log(bubbleSort(test));
