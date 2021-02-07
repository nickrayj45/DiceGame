// Variable for generating random number between 1 and 6
var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "assets/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// Player 2 Code

var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomImageSource2 = "assets/" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// If which player wins...

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "1️⃣ Player 1 Wins!"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 2️⃣"
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
}