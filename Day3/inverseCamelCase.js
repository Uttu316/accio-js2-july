const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (str) => {
  // solution(str);
  sliceWords(str);
  rl.close();
});

function solution(str) {
  let word = "";
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch >= "A" && ch <= "Z") {
      arr.push(word);
      word = ch;
    } else {
      word += ch;
    }
  }

  for (let i = 1; i < arr.length; i++) {
    console.log(arr[i]);
  }
  console.log(word);
}

function sliceWords(str) {
  let s = 0;

  for (let i = 1; i < str.length; i++) {
    let ch = str[i];

    if (ch >= "A" && ch <= "Z") {
      console.log(str.slice(s, i));
      s = i;
    }
  }
  console.log(str.slice(s));
}
