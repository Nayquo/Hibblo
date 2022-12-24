const circleText = document.querySelector(".circleText");
circleText.innerHTML = circleText.textContent.replace(/\S/g,"<span class=\"spanjs\">$&</span>");
const ele = document.querySelectorAll(".spanjs");
for(var i = 1;i<ele.length;i++){
    ele[i].style.transform="rotate("+i*7.85+"deg)";
}