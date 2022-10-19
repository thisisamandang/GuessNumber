'use strict';
// Refactored code is implemented. 

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "Keep Guessing...";
// document.querySelector('.guess').value = 22;
// document.querySelector('.score').textContent = 19;
let secretNumber = Math.trunc((Math.random() * 20) + 1);
let score = 20;
let highScore = 0;

function displayMessage(message) {
    document.querySelector(".message").textContent = message
}

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    if (!guess) {
        // document.querySelector(".message").textContent = "No Number"
        displayMessage("No Number")
    }
    // Correct Number
    else if (guess === secretNumber) {
        displayMessage("Congo! you got it right!!");
        document.querySelector(".score").textContent = score;

        document.querySelector('.number').textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347"
        document.querySelector(".number").style.width = "30rem";

        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    }
    else if (guess !== secretNumber) {
        if (score > 0) {
            displayMessage(guess > secretNumber ? "Too High" : "Too Low");
            score--;
            document.querySelector(".score").textContent = score;
        }
        else {
            displayMessage("You lose");
        }
    }

    // The following commented code is not refactored and does not follow the DRY principle

    // // Higher Number
    // else if (guess > secretNumber) {
    //     if (score > 0) {
    //         document.querySelector(".message").textContent = "Too High";
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //     }
    //     else {
    //         document.querySelector(".message").textContent = "You lose";
    //     }
    // }
    // // Lower Number
    // else if (guess < secretNumber) {
    //     if (score > 0) {
    //         document.querySelector(".message").textContent = "Too Low";
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //     }
    //     else {
    //         document.querySelector(".message").textContent = "You lose";
    //     }
    // }

});


document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector(".message").textContent = "Start Guessing...";  
    displayMessage("Start Guessing...");  //Refactored using functions
    document.querySelector(".score").textContent = score;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = "";
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem";
});