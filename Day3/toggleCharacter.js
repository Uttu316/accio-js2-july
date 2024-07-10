const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  readline.question("", (str) => {
    toggleCase(n, str);
    readline.close();
  });
});

function toggleCase(n, str) {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    let chr = str[i];
    if (chr >= "a" && chr <= "z") {
      ans += chr.toUpperCase();
    } else if (chr >= "A" && chr <= "Z") {
      ans += chr.toLowerCase();
    } else {
      ans += chr;
    }
  }
  console.log(ans);
}
