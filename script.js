const circleText = document.querySelector(".circleText");
const hoverCircleText = document.querySelector(".hoverCircleText");
const hamburgerButton = document.querySelector(".hamburgerButton")
const topBar = document.querySelector(".top-bar")
const middleBar = document.querySelector(".middle-bar")
const bottomBar = document.querySelector(".bottom-bar")
const blackScreen = document.querySelector(".blackScreen")
const blackScreenBlur = document.querySelector(".blackScreenBlur")


circleText.innerHTML = circleText.textContent.replace(/\S/g,"<span class=\"spanjs\">$&</span>");
const ele = document.querySelectorAll(".spanjs");
for(var i = 1;i<ele.length;i++){
    ele[i].style.transform="rotate("+i*7.85+"deg)";
}


hamburgerButton.addEventListener('click', openAndClose);

let a = 0

function openAndClose () {
    if (a == 0){
        topBar.style.width = "20px"
        middleBar.style.width = "0"
        bottomBar.style.width = "20px"
        topBar.style.transform = "rotate(45deg)"
        bottomBar.style.transform = "rotate(-45deg)"
        topBar.style.left = "30%"
        bottomBar.style.left = "30%"
        topBar.style.top = "49%"
        bottomBar.style.top = "10px"
        blackScreen.style.height = "90vh"
        blackScreen.style.width = "90vw"
        blackScreenBlur.style.height = "90vh"
        blackScreenBlur.style.width = "90vw"
        blackScreenBlur.style.opacity = "1"
        a = 1
    } else {
        topBar.style.width = "10px"
        middleBar.style.width = "15px"
        bottomBar.style.width = "10px"
        topBar.style.transform = "rotate(0)"
        bottomBar.style.transform = "rotate(0)"
        topBar.style.left = "50%"
        bottomBar.style.left = "50%"
        topBar.style.top = "33%"
        bottomBar.style.top = "33%"
        topBar.style.transform = "translateX(-50%)"
        bottomBar.style.transform = "translateX(-50%)"
        blackScreen.style.height = "0vh"
        blackScreen.style.width = "0vw"
        blackScreenBlur.style.height = "0vh"
        blackScreenBlur.style.width = "0vw"
        blackScreenBlur.style.opacity = "0"
        a = 0
    }
}
