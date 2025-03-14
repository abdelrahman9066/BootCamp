let myString = "EElllzzzzzzzzeroo";
let result = myString.split("").filter((char, index, arr) => char !== arr[index - 1]);
console.log(result.join("")); 
