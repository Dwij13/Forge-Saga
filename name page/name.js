let enter = document.getElementById("click") //enter button 
enter.addEventListener("click", games)  //click event for enter button 
let name1 = document.getElementById("inputName") //input name 
name1.addEventListener("keypress",()=>{ // enter button event
    if(event.key=="Enter"|| event.KeyCode ==13){
        games()
    }
})


function playMusic(){ //background music 
    let audio = new Audio("./../assets/home.mp3");
    audio.play();
}
playMusic();

function games() {
    localStorage.setItem("name", JSON.stringify(name1.value)) //storing the input name in the local storage 
    window.open("./../game page/games.html", "_self") //refering to the game page 
}
