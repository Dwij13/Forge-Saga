let questions = [
    {
        ques: "In 'The Lord of the Rings,' what is the name of the magical ring?",
        options: [
            "The Gold Ring",
            "The One Ring",
            "The Silver Ring",
            "The Diamond Ring",
        ],
        correct: 1,
    },
    {
        ques: "Who is the famous young wizard in the 'Harry Potter' series?",
        options: [
            "Ron Weasley",
            "Hermione Granger",
            "Harry Potter",
            "Draco Malfoy",
        ],
        correct: 2,
    },
    {
        ques: "What mythical creature is known for breathing fire?",
        options: [
            "Elf",
            "Dragon",
            "Unicorn",
            "Griffin",
        ],
        correct: 1,
    },
    {
        ques: "In 'Alice's Adventures in Wonderland,' what animal is always smiling and can disappear?",
        options: [
            "White Rabbit",
            "Cheshire Cat",
            "Mad Hatter",
            "Tweedledee",
        ],
        correct: 1,
    },
    {
        ques: " Which magical wardrobe leads to the land of Narnia in C.S. Lewis's series?",
        options: [
            "The Magical Mirror",
            "The Enchanted Door",
            "The Wardrobe",
            "The Secret Passage",
        ],
        correct: 2,
    },
    {
        ques: "Who is the main villain in 'The Chronicles of Narnia'?",
        options: [
            "Gandalf",
            "Voldemort",
            "Sauron",
            "The White Witch",
        ],
        correct: 3,
    },
    {
        ques: "What is the name of the boy who can fly and never grows up in 'Peter Pan'?",
        options: [
            "Peter Pan",
            "Wendy Darling",
            "Tinker Bell",
            "Captain Hook",
        ],
        correct: 0,
    },
    {
        ques: "Which creature is said to grant wishes when captured?",
        options: [
            "Genie",
            "Leprechaun",
            "Unicorn",
            "Troll",

        ],
        correct: 1,
    },
    {
        ques: "In Greek mythology, what creature is part lion and part eagle?",
        options: [
            "Minotaur",
            "Harpy",
            "Griffin",
            "Chimera",
        ],
        correct: 2,
    },
    {
        ques: "What is the source of magic in Terry Pratchett's Discworld series?",
        options: [
            "a) The Magic Wand",
            "b) The Great A'Tuin",
            "c) The Wizard's Hat",
            "d) The Discworld's Book of Spells",

        ],
        correct: 1,
    },

]

let questionNumber = 0;

let username = document.getElementById("username")
let riddle = document.getElementById("ques")
let name1 =JSON.parse (localStorage.getItem("name"))
username.innerHTML=name1
let opt1 = document.getElementById("opt1")
let opt2 = document.getElementById("opt2")
let opt3 = document.getElementById("opt3")
let opt4 = document.getElementById("opt4")
let timer = document.getElementById("time")
let progress = document.getElementById("progress")
let live1 = document.getElementById("live1")
let live2 = document.getElementById("live2")
let height = 0;
let life = 0; 
function playMusic(){
    let audio = new Audio("./assets/princess.mp3");
    audio.play();
}
playMusic();
opt1.addEventListener("click", function () {
    optionClick(0)
})
opt2.addEventListener("click", function () {
    optionClick(1)
})
opt3.addEventListener("click", function () {
    optionClick(2)
})
opt4.addEventListener("click", function () {
    optionClick(3)
})
function optionClick(selectedOptions) {
    if (questionNumber < questions.length) {
        if (questions[questionNumber].correct == selectedOptions) {
            questionNumber++;
            height += 10;
            progress.style.height = height + "%";
            if (questionNumber < questions.length) {
                start();
            } else {
                window.open("wizardOver.html", "_self");
            }
        } else {
            life++;
            if (life == 1) {
                live2.style.visibility = "hidden";
            } else if (life == 2) {
                live1.style.visibility = "hidden";
            } else if (life == 3) {
                window.open("wizardOver.html", "_self");
            }
        }
    }
}



function start() {
    riddle.textContent = questions[questionNumber].ques;
    opt1.textContent = questions[questionNumber].options[0];
    opt2.textContent = questions[questionNumber].options[1];
    opt3.textContent = questions[questionNumber].options[2];
    opt4.textContent = questions[questionNumber].options[3];
}
start()

function clock() {
    let time = 60;
    timer.textContent = time;
    setInterval(() => {
        time--;
        timer.textContent = time;
        if (time == 0) {
            gameOver()
        }

    }, 1000)
}
clock()

function gameOver() {
        window.open("./wizardOver.html","_self")

}