const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let ans = 0;
function paths(n, m, i, j, visited) {
  if (i > n || j > m || i < 1 || j < 1) {
    return;
  }

  if (visited[i][j] === true) {
    return;
  }

  if (i === n && j === m) {
    ans++;
    return;
  }

  visited[i][j] = true;

  //horizontal
  paths(n, m, i, j + 1, visited);
  paths(n, m, i, j - 1, visited);
  //vertical
  paths(n, m, i + 1, j, visited);
  paths(n, m, i - 1, j, visited);
  //diagonal
  paths(n, m, i + 1, j + 1, visited);
  paths(n, m, i + 1, j - 1, visited);
  paths(n, m, i - 1, j + 1, visited);
  paths(n, m, i - 1, j - 1, visited);

  visited[i][j] = false;
}

function countPaths(n, m) {
  ans = 0;
  const visited = [];

  for (let i = 0; i <= n; i++) {
    const row = [];
    for (let j = 0; j <= m; j++) {
      row.push(false);
    }
    visited.push(row);
  }
  paths(n, m, 1, 1, visited);
  return ans;
}

rl.question("", (input) => {
  const [n, m] = input.split(" ").map(Number);
  console.log(countPaths(n, m));
  rl.close();
});
