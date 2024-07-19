const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  solve(parseInt(n));
  readline.close();
});

function solve(n) {
  // Your code here
  //base -case
  if (n <= 0) {
    return;
  }
  //task of the function
  console.log("ACCIOJOB");
  solve(n - 1);
}
