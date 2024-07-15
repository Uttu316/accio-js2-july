const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ptice(n, ans) {
  let adrian = "ABC";
  let bruno = "BABC";
  let goran = "CCAABB";

  let a = 0;
  let b = 0;
  let g = 0;

  for (let i = 0; i < ans.length; i++) {
    let curr = ans[i];

    if (adrian[i % 3] == curr) {
      a++;
    }
    if (bruno[i % 4] == curr) {
      b++;
    }
    if (goran[i % 6] == curr) {
      g++;
    }
  }

  let max = Math.max(a, b, g);
  console.log(max);
  if (max == a) {
    console.log("Adrian");
  }
  if (max == b) {
    console.log("Bruno");
  }
  if (max == g) {
    console.log("Goran");
  }
}

readline.question("", (n) => {
  readline.question("", (key) => {
    ptice(parseInt(n), key);
    readline.close();
  });
});
