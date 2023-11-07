let enter = document.getElementById("click")
enter.addEventListener("click", games)
let name1 = document.getElementById("inputName")
name1.addEventListener("keypress",()=>{
    if(event.key=="Enter"|| event.KeyCode ==13){
        games()
    }
})


function playMusic(){
    let audio = new Audio("./assets/home.mp3");
    audio.play();
}
playMusic();

function games() {
    localStorage.setItem("name", JSON.stringify(name1.value))
    window.open("./games.html", "_self")
}
