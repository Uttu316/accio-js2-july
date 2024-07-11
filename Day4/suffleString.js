const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function shuffleString(arr, str) {
  let final = [];

  for (let i = 0; i < str.length; i++) {
    let pos = arr[i];
    let ch = str[i];

    final[pos] = ch;
  }

  let ans = final.join("");

  console.log(ans);
}

readline.question("", (n) => {
  readline.question("", (str) => {
    readline.question("", (arr) => {
      arr = arr.split(" ").map(Number);
      shuffleString(arr, str);
      readline.close();
    });
  });
});
