let theNumber = 100020003000;
let set = new Set(theNumber.toString());
set.delete("0");
console.log(Array.from(set).join("")); 