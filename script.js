const circleText = document.querySelector(".circleText");
const hoverCircleText = document.querySelector(".hoverCircleText");
const hamburgerButton = document.querySelector(".hamburgerButton");
const topBar = document.querySelector(".top-bar");
const middleBar = document.querySelector(".middle-bar");
const bottomBar = document.querySelector(".bottom-bar");
const blackScreen = document.querySelector(".blackScreen");
const blackScreenBlur = document.querySelector(".blackScreenBlur");
const navMenu = document.querySelector(".navMenu");
const arrowOne = document.querySelector(".arrowOne");
const arrowTwo = document.querySelector(".arrowTwo");
const arrowThree = document.querySelector(".arrowThree");
const arrowFour = document.querySelector(".arrowFour");
const imgOne = document.querySelector(".imgOne");
const imgTwo = document.querySelector(".imgTwo");
const imgThree = document.querySelector(".imgThree");
const imgFour = document.querySelector(".imgFour");
const cardOne = document.querySelector(".cardOne");
const cardTwo = document.querySelector(".cardTwo");
const cardThree = document.querySelector(".cardThree");
const cardFour = document.querySelector(".cardFour");
const descCardOne = document.querySelector(".descCardOne")
const descCardTwo = document.querySelector(".descCardTwo")
const descCardThree = document.querySelector(".descCardThree")
const descCardFour = document.querySelector(".descCardFour")


// CIRCLE TEXT OPEN //
circleText.innerHTML = circleText.textContent.replace(/\S/g, "<span class=\"spanjs\">$&</span>");
const ele = document.querySelectorAll(".spanjs");
for (var i = 1; i < ele.length; i++) {
    ele[i].style.transform = "rotate(" + i * 7.85 + "deg)";
}
// CIRCLE TEXT CLOSE //


// NAVMENU ANIM OPEN //
hamburgerButton.addEventListener('click', openAndClose);
let a = 0
function openAndClose() {
    if (a == 0) {
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
        navMenu.style.transition = "opacity 2s"
        navMenu.style.opacity = "1"
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
        navMenu.style.transition = "none"
        navMenu.style.opacity = "0"
        a = 0
    }
}
// NAVMENU ANIM CLOSE //
arrowOne.addEventListener("click", () => { openWithDelai(imgOne, "./thecube.html") })
arrowTwo.addEventListener("click", () => { openWithDelai(imgTwo, "./japanesecheery.html") })
arrowThree.addEventListener("click", () => { openWithDelai(imgThree, "./plasma.html") })
arrowFour.addEventListener("click", () => { openWithDelai(imgFour, "./modernegreekstatue.html") })

function openWithDelai(img, currentpage) {
    let page = currentpage;
    img.style.transform = "scale(0)"
    img.style.borderRadius = "50%"
    setTimeout(() => {
        window.location = page
    }, 500);
}




cardOne.addEventListener('mouseover', () => {
    arrowOne.style.animation = "colorArrowIn .5s both"
    descCardOne.style.animation = "colorDescIn 1s both"
})
cardOne.addEventListener('mouseout', () => {
    arrowOne.style.animation = "colorArrowOut .5s both"
    descCardOne.style.animation = "colorDescOut 1s both"
})
cardTwo.addEventListener('mouseover', () => {
    arrowTwo.style.animation = "colorArrowIn .5s both"
    descCardTwo.style.animation = "colorDescIn 1s both"
})
cardTwo.addEventListener('mouseout', () => {
    arrowTwo.style.animation = "colorArrowOut .5s both"
    descCardTwo.style.animation = "colorDescOut 1s both"
})
cardThree.addEventListener('mouseover', () => {
    arrowThree.style.animation = "colorArrowIn .5s both"
    descCardThree.style.animation = "colorDescIn 1s both"
})
cardThree.addEventListener('mouseout', () => {
    arrowThree.style.animation = "colorArrowOut .5s both"
    descCardThree.style.animation = "colorDescOut 1s both"
})
cardFour.addEventListener('mouseover', () => {
    arrowFour.style.animation = "colorArrowIn .5s both"
    descCardFour.style.animation = "colorDescIn 1s both"
})
cardFour.addEventListener('mouseout', () => {
    arrowFour.style.animation = "colorArrowOut .5s both"
    descCardFour.style.animation = "colorDescOut 1s both"
})






