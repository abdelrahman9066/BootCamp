let myFriends = [
    {title: "Osama", age: 38, available: true, skills: ["HTML", "CSS"]},
    {title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"]},
    {title: "Sayed", age: 33, available: true, skills: ["PHP","Laravel"]},
];

let chosen = 2;

let friend = myFriends[chosen-1];
let {title, age, available, skills:[l1,l2]} = friend;
console.log(title);
console.log(age);
console.log(available? "Available" : "Not Available");
console.log(l2);
