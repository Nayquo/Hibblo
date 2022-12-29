const circleText = document.querySelector(".circleText");
const hoverCircleText = document.querySelector(".hoverCircleText");
const hamburgerButton = document.querySelector(".hamburgerButton")
const topBar = document.querySelector(".top-bar")
const middleBar = document.querySelector(".middle-bar")
const bottomBar = document.querySelector(".bottom-bar")
circleText.innerHTML = circleText.textContent.replace(/\S/g,"<span class=\"spanjs\">$&</span>");
const ele = document.querySelectorAll(".spanjs");
for(var i = 1;i<ele.length;i++){
    ele[i].style.transform="rotate("+i*7.85+"deg)";
}


hamburgerButton.addEventListener('click', open);

let a = 0

function open () {
    console.log(a)
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
        a = 0
    }
}

// function close () {
//     topBar.style.width = "10px"
//     middleBar.style.width = "15px"
//     bottomBar.style.width = "10px"
//     topBar.style.transform = "rotate(0)"
//     bottomBar.style.transform = "rotate(0)"
//     topBar.style.left = "30%"
//     bottomBar.style.left = "30%"
//     topBar.style.top = "49%"
//     bottomBar.style.top = "10px"
// }
