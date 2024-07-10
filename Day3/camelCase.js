const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let t;

rl.on("line", (line) => {
  if (!t) {
    t = parseInt(line);
    return;
  }
  console.log(camelCase(line));
  t--;
  if (t === 0) {
    rl.close();
  }
});

function camelCase(str) {
  let ans = "";
  for (let i = 1; i <= str.length; i++) {
    let chr = str[i];
    let prev = str[i - 1];

    if (prev === "_") {
      ans += chr.toUpperCase();
      i++;
    } else {
      ans += prev;
    }
  }
  return ans;
}
