const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (s) => {
  palidromStrings(s);
  rl.close();
});

function palidromStrings(str) {
  let set = new Set();
  for (let i = 0; i < str.length; i++) {
    let subs = "";
    for (let j = i; j < str.length; j++) {
      subs += str[j];
      if (isPalindrom(subs)) {
        set.add(subs);
      }
    }
  }
  const arr = Array.from(set);
  arr.sort();
  for (let i of arr) {
    console.log(i);
  }

  function isPalindrom(subs) {
    let i = 0;
    let j = subs.length - 1;
    while (i < j) {
      if (subs[i] !== subs[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  }
}

//below solution is with 2d array-o(n2)
function palindromeSubStrs(str) {
  const s = new Set();
  const size = str.length;
  let arr = [];
  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      row.push(false);
    }
    arr.push(row);
  }
  for (let d = 0; d < size; d++) {
    for (let i = 0, j = d; j < size; i++, j++) {
      if (d === 0) {
        arr[i][j] = true;
      } else if (d == 1) {
        arr[i][j] = str[i] === str[j];
      } else {
        arr[i][j] = str[i] === str[j] && arr[i + 1][j - 1];
      }

      if (arr[i][j]) {
        s.add(str.substring(i, j + 1));
      }
    }
  }

  const ans = Array.from(s);
  for (let i of ans.sort()) {
    console.log(i);
  }
}
