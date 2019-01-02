const testArr = [77, 4, 5, 12, -11, 0, 0, 1, 991, 7];

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


function bubbleSort(arr) {
    for (let i = arr.length; i > 1; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            const newElem = arr[i];
            //swap(arr, i, i - 1);
            for (let j = i - 1; j >= 0; j--) {
                if (arr[j] > newElem) {
                    arr[j + 1] = arr[j];
                } else {
                    arr[j + 1] = newElem;
                    break;
                }

                if (!j) {
                    arr[j] = newElem;
                }
            }
        }
    }

    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let currMin = +Infinity;
        let currMinIndex = NaN;

        for (let j = i; j < arr.length; j++) {
            if (arr[j] < currMin) {
                currMin = arr[j];
                currMinIndex = j;
            }
        }

        swap(arr, i, currMinIndex);

    }

    return arr;
}

function mergeSort(arr) {


    return arr;
}


console.log(selectionSort(testArr));
