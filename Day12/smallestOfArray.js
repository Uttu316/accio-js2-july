const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  readline.question("", (arr) => {
    arr = arr.split(" ").map(Number);
    console.log(small(arr, n));
    readline.close();
  });
});

function small(arr, n, min = Infinity) {
  if (n === 0) {
    return min;
  }

  const curr = arr[n - 1];
  if (curr < min) {
    min = curr;
  }

  return small(arr, n - 1, min);
}
