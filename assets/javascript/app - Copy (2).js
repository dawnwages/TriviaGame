//Establish Your Variables
var intervalId;
var wins = 0;
var losses = 0;
var clockRunning = false;
//var time = 0;
var answeredQuestions = [];

//Set our number counter to 100
var number = 100;

//Variable that will hold our interval ID when we execute
var intervalId;

//Identify your buttons

$("#startGame").on("click", startGame);
$("#startBox").css('display','block');
$("#gameBox").css('display','none');



//Write your Functions
function startGame(){
//remove the start button
$("#gameBox").css('display','block');
$("#startBox").css('display','none');
//reset timer to 00:00
$("#timer").html("<h3>00:00</h3>");



//start;
//start timer and the timer should continue to count down until I click an answer
//randomly select new question // not random just displaying right now

//display question and answers
$("#questionText").text(quizQuestions[1].question);
$("#choice1").text(quizQuestions[1].choices[0]);
$("#choice2").text(quizQuestions[1].choices[1]);
$("#choice3").text(quizQuestions[1].choices[2]);
$("#choice4").text(quizQuestions[1].choices[3]);
//When they click an answer

//if correct
test;

//if incorrect
run;

}

function test() {
    $("#timer").html("<h3>00:03</h3>");
}

function run() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    
    $("#timer").html("<h3>"+ number + "</h3>");

    if (number === 0) {
        stop();
        alert("Time Up!");
    }
}

function stop() {
    clearInterval(intervalId);
}


// function runClock() {
//     intervalId = setInterval(decrement, 1000);
//     clockRunning = true;
// };

// function decrement() {
//     number--;
//     $("#time").html("<h3>"+number+"</h3>");

//     //once the number hits zero
//     if (number === 0) {
//         stopClock();

//     //alert the user
//     alert("Time Up!");
//     }
// }

// function stopClock() {
//     clearInterval(intervalId);
// }





// function start () {
//     if(!clockRunning){
//         intervalId = setInterval(count, 3000);
//         clockRunning = true;
//     }
//     console.log(converted);
// };

// function count () {
//     time++;
//     var converted = timeConverter(time);
//     console.log(converted);

//     $("#timer").text(converted);
// };

// function timeConverter (t) {
//     var minutes = Math.floor(t / 60);
//     var seconds = t - (minutes * 60);

//     if (seconds < 10) {
//         seconds = "0" + seconds;
//     }

//     if (minutes === 0) {
//         minutes = "00";
//     }

//     else if (minutes < 10) {
//         minutes = "0" + minutes;
//     }

//     return minutes + ":" + seconds;
// };


var quizQuestions = [
    {
        question: "Which Ruby falls from the sky to try to live on Earth?",
        choices: ["navy", "elbow", "eyeball", "leggy"],
        answer: "navy",
        season: "4",
        episode: "19",
    },

    {
        question: "When did Steven Universe first air?",
        choices: ["June 2nd 2014", "October 4th 2011", "November 4th 2013", "January 6th 20014"],
        answer: "November 4th 2013",
        season: "NA",
        episode: "NA",
    },

    {
        question: "What are Steven and Amethyst doing when they notice the Red Eye hurtling toward the Earth?",
        choices: ["eating frybits", "making pancakes", "training with Connie", "hanging out with Mr.Smiley"],
        answer: "eating frybits",
        season: "1",
        episode: "1",
    }
]