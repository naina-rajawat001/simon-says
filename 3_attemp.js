let startBtn = document.getElementById("start-btn")
let section = document.querySelector("section")
let div1 = document.getElementById("box1")
let div2 = document.getElementById("box2")
let div3 = document.getElementById("box3")
let div4 = document.getElementById("box4")
let scoreDiv = document.getElementById("level")
let allDiv = document.getElementsByClassName("div")

let sequenceArray = []
let userSequenceArray = []
let count = 0;
let sequenceLength = 0;



section.addEventListener("click", (e)=> {
    userSequenceArray.push(e.target.id.slice(3))
    for (let i = 0; i < sequenceArray.length; i++) {
        if (sequenceArray[i] == userSequenceArray[i]) {
            if (sequenceArray.length > sequenceLength) {
                count ++
                render();
            }
            userSequenceArray = [];
            sequenceLength = sequenceArray.length
            sequenceArray.push(randomNumber())
            setTimeout (() => {
               for (sequence of sequenceArray) {
                blink(sequenceArray[sequence])
               }
            }, 200)
        }
    }
})




function startGame() {
    if (sequenceArray.length < 1) {
        sequenceArray.push(randomNumber())
        setTimeout( () => {
            blink(sequenceArray[0])
        }, 500)
    }

}

function randomNumber() {
    return Math.floor(Math.random() * 4 ) + 1
}




function render() {
    scoreDiv.innerText = count
}



function blink(divNum) {
    switch(divNum) {
        case 1: 
            div1.classList.add("opacity")
            setTimeout(() => {
                div1.classList.remove("opacity")

            }, 200)
            break;
        case 2: 
            div2.classList.add("opacity")
            setTimeout(() => {
                div2.classList.remove("opacity")

            }, 200)
            break;
        case 3: 
            div3.classList.add("opacity")
            setTimeout(() => {
                div3.classList.remove("opacity")

            }, 200)
            break;
        case 4: 
            div4.classList.add("opacity")
            setTimeout(() => {
                div4.classList.remove("opacity")

            }, 200)
            break;
        default: 
            console.log("some error")
    }
}
