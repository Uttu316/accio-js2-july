const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function SubString(str) {
  //Write code here
  let n = str.length;
  for (let i = 0; i < n; i++) {
    let subs = "";
    for (let j = i; j < n; j++) {
      subs += str[j];
      console.log(subs);
    }
  }
}

rl.on("line", (str) => {
  SubString(str);
  rl.close();
});
