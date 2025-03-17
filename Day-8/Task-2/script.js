const inp = document.querySelector('.inp');
const p = document.querySelector('.result');
inp.addEventListener('input',()=>{
    const egp = (inp.value * 50.53) 
    document.querySelector(".result").innerHTML = `{${inp.value}} USD Dollar = {${egp}} Egyptian Pound`;
})




