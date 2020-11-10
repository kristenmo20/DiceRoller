var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var dice1Image = "images/dice" + randomNumber1 + ".png";
var dice2Image = "images/dice" + randomNumber2 + ".png";

var dice1Selector = document.querySelector(".img1").setAttribute("src", dice1Image);
var dice2Selector = document.querySelector(".img2").setAttribute("src", dice2Image);
const h1Selector = document.querySelector("h1");

if ( randomNumber1 > randomNumber2) {
    h1Selector.innerHTML = "🚩 Player 1 Wins!"
} else if (randomNumber2 > randomNumber1) {
    h1Selector.innerHTML = "Player 2 Wins! 🚩"
} else {
    h1Selector.innerHTML = "Draw!"
}