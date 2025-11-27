let startBtn = document.getElementById("start-btn")
let section = document.querySelector("section")
let div1 = document.getElementById("box1")
let div2 = document.getElementById("box2")
let div3 = document.getElementById("box3")
let div4 = document.getElementById("box4")
let scoreDiv = document.getElementById("level")
let allDiv = document.getElementsByClassName("div")
let userScore = document.getElementById("user-score")
let highScore = document.getElementById("highest-score")
let winning = document.getElementById("winning")

let congrats = ["Good start! Try again? 🔁🙂",
"Warm-up done! Another round? 🎮✨",
"Nice try! Go again? 🌟🔄",
"Flow building! One more? ✨➡️",
"Pattern coming! Try again? 💪🔄",
"Timing will grow! Ready? 🕹️🙂",
"Skills rising! Go again? 🚀🔁",
"Great energy! Another try? ⚡🎮",
"Getting better! One more? 🧠🔄",
"Fun start! Level up? 🎉➡️"
]


    
let newHighScore=["New high score! 🔥 Next time higher—focus on your pace. 🚀",

 "Record smashed! 🏆 Aim bigger—practice a few extra minutes. 💫",

 "High score unlocked! 🎮✨ Push further—fix one small mistake. 🌟",

"Score cracked! 💥 Plan your next move—steady wins. ♟️🔥",

 "Top score again! ⚡ Go sharper—remove distractions. 🧠✨",

"New record! 💫 Abhi toh start hai—repeat your weak spots. 🔥",

 "Level up! 🚀 Chase perfection—accuracy first. 🌟",

 "Beat my score! 💪🔥 Next: make tough look easy—take short breaks. ✨",

"High score flex! 🎮💥 Go higher—track where you improve. 😌",

"New high score! 🌠 Keep rising—repeat until perfect. ⚡"

]




let sequenceArray = []
let userSequenceArray = []
let count = 0;
let isOkay = 0



section.addEventListener("click", (e) => {
    console.log("in eventlistner")
    if (userSequenceArray.length < sequenceArray.length) {
        console.log("i'm in if")
        userSequenceArray.push(e.target.id.slice(3))
    }
    if (userSequenceArray.length == sequenceArray.length){
        console.log("i'm in equal condition")
        verify()
    }
})



function verify() {
    console.log("inside verify function")
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
        }
        if (count == 0) {
            showScore()
        }
        
        scoreDiv.innerText = count;
        userSequenceArray = [];
        repeatCurrentSequence()
    }
}





function showScore() {
    if (count > 0) {

    }
}


function repeatCurrentSequence() {
    setTimeout( ()=> {
            for (let i = 0; i < sequenceArray.length; i++ ) {
                setTimeout(() => {
                    blink(sequenceArray[i])
                }, 400 * i)
            }
    }, 500)
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


// section.addEventListener("click", (e)=> {
//     userSequenceArray.push(e.target.id.slice(3))
//     for (let i = 0; i < sequenceArray.length; i++) {
//         if (sequenceArray[i] == userSequenceArray[i]) {
//             if (sequenceArray.length > sequenceLength) {
//                 count ++
//                 render();
//             }
//             userSequenceArray = [];
//             sequenceLength = sequenceArray.length
//             sequenceArray.push(randomNumber())
//             setTimeout (() => {
//                for (sequence of sequenceArray) {
//                 blink(sequenceArray[sequence])
//                }
//             }, 200)
//         }
//     }
// })

