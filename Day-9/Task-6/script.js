let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
let letters = chars.filter(char => typeof char === "string");
let count = chars.filter(item => typeof item === "number");

let replaced = letters.slice(0,count.length)
result=[...replaced,...letters]
console.log(result);