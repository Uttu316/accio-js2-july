let a = ["u", "t", "k", "a", "r", "s", "h", "g", "u", "p", "t", "a"];

let s = new Set(a);

s.add("a");
s.add("b");
s.add("a");
s.add("ab");

s.delete("a");

let is = s.has("a");

let arr = Array.from(s);

console.log(arr);

//create a set put all character of your name into set, print all values of set
