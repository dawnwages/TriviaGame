var answerTimer = 3;
var questionTimer = 10;
var gameActive = false;
var answeredQuestions = [];
var score = 0;

//Variable that will hold our setInterval that runs the clock
var intervalId;

//prevents the clock from being sped up unnecessarily
var clockRunning = false; // is this the same thing as gameActive??

//Open page with Game hidden - only start button
window.onload = hideGame;

//buttons
$("#gameButton").on("click", startGame);

//hide game
function hideGame () {
    //answeredQuestions = []; //When you are hiding the game and starting over you have the full list of questions available to chose from again
    //score = 0;
    //$("#score").text("");
    var x = document.getElementById("gameBox");
    if (x.style.display ==="none"){
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

//reset clock and add new question
//function resetQuestion() {
//    $("#timer").text("00:00");
//}

console.log(gameActive);

function startGame () {
    //var gameActive = true;
    //console.log(gameActive);
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
        choices: ["navy", "elbow", "eyeball", "leggy"],
        answer: "navy",
        season: "4",
        episode: "19",
    },

    question2: {
        question: "When did Steven Universe first air?",
        choices: ["June 2nd 2014", "October 4th 2011", "November 4th 2013", "January 6th 20014"],
        answer: "November 4th 2013",
        season: "NA",
        episode: "NA",
    }

    question3: {
        question: "What are Steven and Amethyst doing when they notice the Red Eye hurtling toward the Earth?",
        choices: ["eating frybits", "making pancakes", "training with Connie", "hanging out with Mr.Smiley"],
        answer: "eating frybits",
        season: "1",
        episode: "1",
    }


}