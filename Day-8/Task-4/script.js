let input_num=document.querySelector('.num');
let input_txt=document.querySelector('.Text');
let input_button=document.querySelector('.btn');
let result=document.querySelector('.result');

input_button.addEventListener("click",function(){
    result.innerHTML="";
    for(let i =0;i<input_num.value;i++){
        let container=document.createElement("div");
        container.classList.add("container");
        container.textContent=input_txt.value;
        result.appendChild(container);
    }
})





