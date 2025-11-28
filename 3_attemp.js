let startBtn = document.getElementById("start-btn")
let section = document.querySelector("section")
let div1 = document.getElementById("box1")
let div2 = document.getElementById("box2")
let div3 = document.getElementById("box3")
let div4 = document.getElementById("box4")
let scoreDiv = document.getElementById("level")
let allDiv = document.getElementsByClassName("div")
let userScore = document.getElementById("user-score")
let winning = document.getElementById("winning")
let scoreBoard = document.getElementById("score-board")
let lifes = document.getElementsByClassName("fa-heart")
let cancelBtn = document.getElementById("cancel")
let playAgainBtn = document.getElementById("again")

let sequenceArray = []
let userSequenceArray = []
let count = 0;
let isOkay = 0
let lifeline = 3;





function startGame() {
    lifeline = 3
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









section.addEventListener("click", (e) => {
    if (userSequenceArray.length < sequenceArray.length) {
        userSequenceArray.push(e.target.id.slice(3))
    }
    if (userSequenceArray.length == sequenceArray.length){
        verify()
    }
})



function verify() {
    for (let i = 0; i < sequenceArray.length; i++) {
        if (sequenceArray[i] == userSequenceArray[i]) {
            isOkay ++
        }
    }
    if (isOkay === sequenceArray.length) {
        count++
        scoreDiv.innerText = count;
        userSequenceArray = []
        isOkay = 0
        resumeGame()
    }
    else { 
        if (count > 0) {
            count --
            scoreDiv.innerText = count;
 
        }
        if (lifeline > 0) {
                lifelineReducer()
        }
        userSequenceArray = [];
        repeatCurrentSequence()
    }
}



function resumeGame() {
    if (count >= 1) {
        sequenceArray.push(randomNumber())
        setTimeout( ()=> {
            for (let i = 0; i < sequenceArray.length; i++ ) {
                setTimeout(() => {
                    blink(sequenceArray[i])
                }, 400 * i)
            }
        }, 500)
    }
}



function lifelineReducer () {
    if (lifeline > 0) {
        lifes[lifeline-1].classList.remove("fa-solid")
        lifes[lifeline-1].classList.add("fa-regular")
        lifeline--
        if (lifeline == 0) {
            scoreBoard.style.display = "block"
            showScore()
        }
    }

    
} 


function repeatCurrentSequence() {
    setTimeout( ()=> {
            for (let i = 0; i < sequenceArray.length; i++ ) {
                setTimeout(() => {
                    blink(sequenceArray[i])
                }, 450 * i)
            }
    }, 500)
}




function blink(divNum) {
    switch(divNum) {
        case 1: 
            div1.classList.add("opacity")
            setTimeout(() => {
                div1.classList.remove("opacity")

            }, 250)
            break;
        case 2: 
            div2.classList.add("opacity")
            setTimeout(() => {
                div2.classList.remove("opacity")

            }, 250)
            break;
        case 3: 
            div3.classList.add("opacity")
            setTimeout(() => {
                div3.classList.remove("opacity")

            }, 250)
            break;
        case 4: 
            div4.classList.add("opacity")
            setTimeout(() => {
                div4.classList.remove("opacity")

            }, 250)
            break;
        default: 
            console.log("some error")
    }
}




function showScore() {
    if (count > 0) {
        
        winning.innerText = "🥇 Winner! Dare to play once more? 😉🔥"
    }
    if (count == 0) {
        winning.innerText = "🔴 Game Over! Don’t give up now! 🚀"
    }
    userScore.innerText = count
}


playAgainBtn.addEventListener("click",() => {
    count = 0
    startGame()
})

cancelBtn.addEventListener("click", ()=> {
    scoreBoard.style.display = "none";
})