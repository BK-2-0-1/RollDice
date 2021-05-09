var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

var winner = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    winner.innerHTML = "🚩Player 1 wins"
} else if (randomNumber1 < randomNumber2) {
    winner.innerHTML = "🚩Player 2 wins"
} else {
    winner.innerHTML = "Draw"
}