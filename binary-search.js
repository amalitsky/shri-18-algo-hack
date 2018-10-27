const test = [
  -111, -65, -23, -10, 0, 0, 1, 3, 3, 6, 6, 7, 7, 11, 21, 45, 99
];

function middleIndex(length) {
  return Math.ceil(length / 2);
}

function binarySearch(arr, needle) {
  function search() {
    if (start > end || start < 0 || end > test.length) {
      throw 'f**d up';
    }

    if (end - start <= 1) {
      if (needle === arr[start]) {
        return start;
      }
      if (needle === arr[end]) {
        return end;
      }
      return;
    }

    const midElemIndex = start + middleIndex(end - start);
    const midValue = arr[midElemIndex];

    if (midValue === needle) {
      return midElemIndex;
    } else if (needle > midValue) {
      start = midElemIndex;
    } else {
      end = midElemIndex;
    }

    return search();
  }

  let
    start = 0,
    end = arr.length;

  return search();
}

console.log(test);

console.log(binarySearch(test, 45));
console.log(binarySearch(test, 120));
console.log(binarySearch(test, -65));
console.log(binarySearch(test, 99));
