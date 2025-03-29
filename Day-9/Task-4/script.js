let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

let arr4 = [...arr1, ...arr2, ...arr3];
console.log(arr4);

let arr5 = [c, , , , , , , a,b] = arr4;
console.log(`My best friends are : ${a}, ${b}, ${c}`); 