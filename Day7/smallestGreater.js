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

  console.log(smallestGreaterElements(Arr).join(" "));
}

function smallestGreaterElements(arr) {
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    let minDiff = Infinity;
    let minPos = -10000000;
    for (let j = 0; j < arr.length; j++) {
      if (curr < arr[j]) {
        let diff = arr[j] - curr;
        if (diff < minDiff) {
          minDiff = diff;
          minPos = arr[j];
        }
      }
    }
    ans.push(minPos);
  }
  return ans;
}
