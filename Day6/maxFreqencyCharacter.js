const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (s) => {
  console.log(MaximumFrequencyChar(s));
  readline.close();
});
function MaximumFrequencyChar(str) {
  // letters array to store frequency of every character
  let letters = new Array(26).fill(0);

  //loop the given string
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    let ascii = ch.charCodeAt(); // get ascii of each char

    let pos = ascii - 97; // calculate 0 based position of char

    letters[pos]++; // increment the frequecy of each character on its position
  }

  let max = -Infinity; // start with least possible value

  let maxPos = -1; // start with non possible position

  for (let i = 0; i < letters.length; i++) {
    //find max value in the frequency array
    if (max < letters[i]) {
      max = letters[i];
      maxPos = i; // store the position of max frequecy element
    }
  }
  // console.log({max,maxPos})

  return String.fromCharCode(maxPos + 97); // print character using its position
}
