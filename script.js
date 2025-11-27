let startBtn = document.getElementById("start-btn")
let section = document.querySelector("section")
let div1 = document.getElementById("box1")
let div2 = document.getElementById("box2")
let div3 = document.getElementById("box3")
let div4 = document.getElementById("box4")
let scoreDiv = document.getElementById("level")
let allDiv = document.getElementsByClassName("div")


let randomNumArray = [];


startBtn.addEventListener("click", () => {
  randomNum()
  lightUP() 
})

section.addEventListener("click", (e) => {
    let count = 0;
    let markedDiv = selectDiv();
    console.log(e.target)
    for (let i = 0; i< markedDiv.length; i++) {
        if (e.target === markedDiv[i]) {
            count++
           
        }
    }
    scoreDiv.innerText = count;
    
}) 





function randomNum () {
    let random= Math.floor(Math.random()*4) + 1
    randomNumArray.push(random)
}


function lightUP() {
    let selectedDivArray = selectDiv();
    let lastEle = selectedDivArray.slice(-1)
    backToSame()
    
    lastEle[0].style.backgroundColor = "rgba(0, 0, 0, 0.2)"
    
    blink()
}

function selectDiv () { 
    let divArray = randomNumArray.map((el) => {
        switch(el) {
            case 1: 
                return div1;
            case 2: 
                return div2;
            case 3: 
                return div3;
            case 4: 
                return div4;
        }
    })
    return (divArray)
}


function backToSame() {
    for (box of allDiv) {
        if (box.id === "box1") {
            box.style.backgroundColor = "#bf1a1a"
        }
        if (box.id === "box2") {
            box.style.backgroundColor = "#628141"
        }
        if (box.id === "box3") {
            box.style.backgroundColor = "#4A70A9"
        }
        if (box.id === "box4") {
            box.style.backgroundColor = "#e9ba43ff"
        }
        
    }
}



function blink () {
    let result = selectDiv()
    let ele = result.slice(-1) 
   
    setTimeout(() => {
        if (ele[0].id === "box1") {
            ele[0].style.backgroundColor = "#bf1a1a"
        }
        if (ele[0].id === "box2") {
           ele[0].style.backgroundColor = "#628141"
        }
        if (ele[0].id === "box3") {
            ele[0].style.backgroundColor = "#4A70A9"
        }
        if (ele[0].id === "box4") {
            ele[0].style.backgroundColor = "#F5C857"
        }
    }, 200); 
}

 

