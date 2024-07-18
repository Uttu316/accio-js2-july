const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function oddEvenSort(arr, n) {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let j = 1; j < arr.length - 1; j += 2) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        isSorted = false;
      }
    }
    for (let j = 0; j < arr.length - 1; j += 2) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        isSorted = false;
      }
    }
  }

  console.log(arr.join(" "));
}

function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

readline.question("", (n) => {
  readline.question("", (array) => {
    array = array.split(" ").map(Number);
    oddEvenSort(array, n);
    readline.close();
  });
});
