const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function maze(i, j, n, m) {
  if (i == n && j == m) {
    return [""];
  }

  const paths = [];

  for (let x = 1; x <= m - j; x++) {
    const path = maze(i, j + x, n, m);
    for (let p of path) {
      paths.push("h" + x + p);
    }
  }

  for (let x = 1; x <= n - i; x++) {
    const path = maze(i + x, j, n, m);
    for (let p of path) {
      paths.push("v" + x + p);
    }
  }

  for (let x = 1; x <= n - i && x <= m - j; x++) {
    const path = maze(i + x, j + x, n, m);
    for (let p of path) {
      paths.push("d" + x + p);
    }
  }

  return paths;
}
function mazePath(n, m) {
  const ans = maze(1, 1, n, m);
  for (let i of ans) {
    console.log(i);
  }
}
rl.question("", (n) => {
  rl.question("", (m) => {
    // const [n, m] = input.split(' ').map(Number);
    n = Number(n);
    m = Number(m);
    mazePath(n, m);
    rl.close();
  });
  rl.close();
});
