var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let Arr = inputArr[1].split(" ").map((x) => parseInt(x));

  console.log(insertionSort(Arr).join(" "));
}

function insertionSort(arr) {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let j = i - 1;
    let selected = arr[i];

    while (j >= 0 && arr[j] > selected) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = selected;
  }

  return arr;
}
