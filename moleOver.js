let again = document.getElementById("again")
let home = document.getElementById("home")
let scoreboard = document.getElementById("score")
again.addEventListener("click",()=>{
    window.open("./mole.html","_self")
})
home.addEventListener("click",()=>{
    window.open("./home.html","_self")
})

let value = localStorage.getItem("score")
scoreboard.innerHTML=value;
