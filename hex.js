let hex = ["A","B","C","D","E","F","0","1","2","3","4","5","6","7","8","9"];

const btn = document.getElementById("btn");
const colortxt = document.querySelector("#color");



btn.addEventListener("click",()=>{
    let color ="#"
    for (let index = 0; index < 6; index++) {
        color += hex[getRandom()]
    }
    colortxt.textContent = color;
    document.body.style.backgroundColor = color;
})

function getRandom(){
    return Math.floor(Math.random()*hex.length);
}