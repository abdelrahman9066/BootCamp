let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let mix_updated = mix.filter((x)=>{
    if(typeof x === "string"){
        return x;
    }
})
console.log(mix_updated.join(""));
