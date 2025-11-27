let startBtn = document.getElementById("start-btn")
let section = document.querySelector("section")
let div1 = document.getElementById("box1")
let div2 = document.getElementById("box2")
let div3 = document.getElementById("box3")
let div4 = document.getElementById("box4")
let scoreDiv = document.getElementById("level")
let allDiv = document.getElementsByClassName("div")





let sequenceArray = [];
let userSequenceArray = [];
let isStarted = false;

startBtn.addEventListener("click", () => {
    if (isStarted == false) {
        startGame()
    }
    
}) 




function randomNumber() {
    return Math.floor(Math.random() * 4 ) + 1
}


function blink(divNum) {
    switch(divNum) {
        case 1: 
            return div1;
        case 2: 
            
            return div2;
        case 3: 
            
            return div3;
        case 4: 
            
            return div4;
        default: 
            console.log("some error")
    }
}
