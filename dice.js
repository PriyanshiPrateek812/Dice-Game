function rollDice() {
    var n = Math.random();
    n = (n*6)+1;
    n = Math.floor(n);
    return n;
}
var dice1 = rollDice();
var dice2 = rollDice();
var diceImg = document.querySelector(".img1").setAttribute("src", "images/dice" + dice1 + ".png");

var diceImg = document.querySelector(".img2").setAttribute("src", "images/dice" + dice2 + ".png");
if(dice1===dice2){
    document.querySelector("h1").innerHTML = "Draw!";
}
else if(dice1>dice2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}