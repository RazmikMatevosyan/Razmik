let color1 = document.querySelector('.c1')
let color2 = document.querySelector('.c2')
let gradientCont = document.querySelector("#gradient-cont")
let BTN = document.querySelector(".randomColorBTN")

function makeColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16)
    return randomColor;
}

function generateGradient() {
    color1.value = "#" + makeColor()
    color2.value = "#" + makeColor()
    gradientCont.style.background = `linear-gradient(${color1.value}, ${color2.value})`
}

function setGradient() {
    gradientCont.style.background = `linear-gradient(${color1.value}, ${color2.value})`
}

document.body.addEventListener("load", generateGradient())
color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
btn.addEventListener("click", generateGradient)