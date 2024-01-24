let btnOpen = document.querySelector(".btnOpen");
let box = document.querySelector(".box");
let body = document.querySelector("body");
let close = document.querySelector(".close");

btnOpen.addEventListener("click", ()=>{
    btnOpen.style.display="none";
    box.style.display="block";
    body.style.backgroundColor="#222";
})
close.addEventListener("click", ()=>{
    btnOpen.style.display="block"
    box.style.display="none";
    body.style.backgroundColor="#999";
})