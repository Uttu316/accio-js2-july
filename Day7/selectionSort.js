const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let minPos = i;
    for (let j = i; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
        minPos = j;
      }
    }
    swap(arr, i, minPos);
  }
  return arr;
}

function swap(arr, x, y) {
  let tem = arr[x];
  arr[x] = arr[y];
  arr[y] = tem;
}

readline.question("", (n) => {
  readline.question("", (arr) => {
    arr = arr.split(" ").map(Number);
    let ans = selectionSort(arr);
    console.log(ans.join(" "));
    readline.close();
  });
});
