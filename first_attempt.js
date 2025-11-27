

startBtn.addEventListener("click", () => {
    lightUpDiv();
})

section.addEventListener("click", (e) => {
    let count = 0
    if (e.target === selectDiv()) {
        count++
        
    }
    span.innerText = count
})




function lightUpDiv() {
    let selectedDiv = selectDiv();
    backToSame()
    setTimeout(() => {
        selectedDiv.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
        console.log("current div changed")
    }, 500)
    setTimeout(() => {
        selectedDiv.style.backgroundColor = ""
        console.log("current div color back to original")
    }, 200)
   
   
}


function selectDiv () { 
        let random = Math.floor(Math.random()*4) + 1;
        switch(random) {
            case 1: 
                return div1;
            case 2: 
                return div2;
            case 3: 
                return div3;
            case 4: 
                return div4;
        }   
}




function backToSame () {
    div.forEach((ele) => {
        ele.style.backgroundColor = ""
        console.log("black remove from all")
    })          
}














