const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let arr = [];

readline.question("", (num) => {
  n = parseInt(num);
  readArray(0);
});

function readArray(i) {
  if (i < n) {
    readline.question("", (word) => {
      arr.push(word);
      readArray(i + 1);
    });
  } else {
    let result = getStrings(arr);
    for (let i = 0; i < result.length; i++) {
      console.log(result[i]);
    }
    readline.close();
  }
}

function getRow(char) {
  if ("qwertyuiop".includes(char)) {
    return 1;
  }
  if ("asdfghjkl".includes(char)) {
    return 2;
  }
  if ("zxcvbnm".includes(char)) {
    return 3;
  }
}

function getStrings(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let firstChar = word[0];

    let firsCharRow = getRow(firstChar);

    let isGoodWord = true;

    for (let j = 1; j < word.length; j++) {
      let chr = word[j];

      let rowNo = getRow(chr);

      if (rowNo !== firsCharRow) {
        isGoodWord = false;
        break;
      }
    }

    if (isGoodWord) {
      ans.push(word);
    }
  }
  return ans;
}
