var answerTimer = 3;
var questionTimer = 10;
var gameActive = false;

//Open page with Game hidden - only start button
window.onload = hideGame;

//buttons
$("#gameButton").on("click", startGame);

function hideGame () {
    var x = document.getElementById("gameBox");
    if (x.style.display ==="none"){
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

console.log(gameActive);

function startGame () {
    var gameActive = true;
    console.log(gameActive);
    //hide startbox
    var x = document.getElementById("startBox");
    if (x.style.display === "none"){
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
    //display the game box
    var y = document.getElementById("gameBox");
    if (y.style.display === "block"){
        y.style.display = "none";
    }
    else {
        y.style.display = "block";
    }

    //start timer to answer question

}




var quizQuestions = {
    question1: {
        question: "Which Ruby falls from the sky to try to live on Earth?",
        answers: ["navy", "elbow", "eyeball", "leggy"],
        season: "4",
        episode: "19",
    }

    question2: {
        question: 
    }

}