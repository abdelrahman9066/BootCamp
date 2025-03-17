const res = document.querySelectorAll('img');
console.log(res);

for (let i = 0; i < res.length; i++) {
    res[i].hasAttribute('alt') ? res[i].setAttribute('alt','Old') : res[i].setAttribute('alt','Elzero New')
    
}





