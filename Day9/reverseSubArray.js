const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (N) => {
  rl.on("line", (a) => {
    const arr = a.split(" ").map(Number);
    const result = isSorted(arr, N);
    console.log(result);
    rl.close();
  });
});

function isSorted(arr, n) {
  let s = -1;

  // find starting point of declining line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) {
      s = i;
      break;
    }
  }

  // if no starting point found it means the array is sorted
  if (s === -1) {
    return "Yes";
  }

  let e = -1;

  // calculate the end point of the declining line
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i - 1] > arr[i]) {
      e = i;
      break;
    }
  }

  //if the declining line is not properly declined it can't be reverse.
  for (let i = s; i < e; i++) {
    if (arr[i + 1] > arr[i]) {
      return "No";
    }
  }

  // if the number before the start poisition is bigger than end position element then it ca't be reversed
  if (arr[s - 1] > arr[e]) {
    return "No";
  }
  // if the number at the start poisition is bigger than end+1 position element then it ca't be reversed
  if (arr[s] > arr[e + 1]) {
    return "No";
  }

  return "Yes";
}
