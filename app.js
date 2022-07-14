color = ["yellow","grey","purple","green","#5fa034"];
const btn = document.getElementById("btn");
const colortxt = document.querySelector("#color");

btn.addEventListener("click",()=>{
    let newcolor = getRandom() 
    colortxt.textContent = color[newcolor];
    document.body.style.backgroundColor = color[newcolor];
})

function getRandom(){
    return Math.floor(Math.random()*color.length);
}