//Establish Your Variables
var intervalId;
var wins = 0;
var losses = 0;
var clockRunning = false;
//var time = 0;
var answeredQuestions = [];
var question = "";
var choice0 = "";
var choice1 = "";
var choice2 = "";
var choice3 = "";
var userSelect;

//Set our number counter to 100
var time = 30;
var number = time;

//Variable that will hold our interval ID when we execute
var intervalId;

var val = 0;

//Identify your buttons

$("#startGame").on("click", startGame);
$("#startBox").css('display','block');
$("#gameBox").css('display','none');


$("#choice0").on("click", function () {
    userPick(choice0);
});

$("#choice1").on("click", function () {
    userPick(choice1);
});

$("#choice2").on("click", function () {
    userPick(choice2);
});

$("#choice3").on("click", function () {
    userPick(choice3);
});
//Write your Functions
function startGame(){
//remove the start button
$("#gameBox").css('display','block');
$("#startBox").css('display','none');
//reset timer to 00:00
var converted = timeConverter(number);

$("#timer").html("<h3>"+converted+"</h3>");

//randomly select new question // not random just displaying right now
//val = Math.floor((Math.random()*length.quizQuestions)+ 0);
// var val = Math.floor(Math.random()*quizQuestions.length);

selectQuestion();

// $("#choice0").on("click", userPick(choice0));
// $("#choice1").on("click", userPick(choice1));
// $("#choice2").on("click", userPick(choice2));


// answeredQuestions.push(val);
// console.log(val);
// console.log(quizQuestions.length);
// console.log(quizQuestions[val]);
// console.log(quizQuestions[1]);
// console.log(quizQuestions[1].choices[1]);
// //display question and answers
// $("#questionText").text(quizQuestions[1].question);

// choice0.push(quizQuestions[val].choices[0]);
// choice1.push(quizQuestions[val].choices[1]);
// choice2.push(quizQuestions[val].choices[2]);
// choice3.push(quizQuestions[val].choices[3]);

// $("#choice0").text(choice0);
// $("#choice1").text(choice1);
// $("#choice2").text(choice2);
// $("#choice3").text(choice3);



//Start Running the Clock
run();
//if correct

//if incorrect


}

//select and display random question and random answer 
//this should be diplayed twice. once when the button is pushed and another time when the time runs out to start a new game. 
function selectQuestion() {
    //randomly selected question //also figure out how not repeat
    val = Math.floor(Math.random()*quizQuestions.length);
    
    
    answeredQuestions.push(val);
    console.log(val);
    console.log(quizQuestions.length);
    console.log(quizQuestions[val]);
    console.log(quizQuestions[1]);
    console.log(quizQuestions[1].choices[1]);
    //display question and answers
    
    question = quizQuestions[val].question;
    choice0 = quizQuestions[val].choices[0];
    choice1 = quizQuestions[val].choices[1];
    choice2 = quizQuestions[val].choices[2];
    choice3 = quizQuestions[val].choices[3];
    
    $("#questionText").html("<h3><center>"+question+"</center></h3>");
    $("#choice0").text(choice0);
    $("#choice1").text(choice1);
    $("#choice2").text(choice2);
    $("#choice3").text(choice3);


}


function run() {
    if (!clockRunning){
    intervalId = setInterval(decrement, 1000);
    clockRunning = true;
    }
}

function decrement() {
    number--;

    var converted = timeConverter(number);
    
    $("#timer").html("<h3>"+ converted + "</h3>");

    if (number === 0) {
        stop();

        alert("Time Up!");
        clockRunning = false;

        question = "";
        choice0 = "";
        choice1 = "";
        choice2 = "";
        choice3 = "";
        
        //select new question

        selectQuestion();
        number = time;
        run();
    }
}



function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }

    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}

function stop() {
    clearInterval(intervalId);
    alert("Time Up!");
}

function userPick(result) {
 alert(result);
 alert(quizQuestions[val].answer);
 if (result === quizQuestions[val].answer) {
     wins++;
     alert("You're correct!");
     number = time;
     startGame();
 }
 else {
     alert("You're incorrect!");
 }
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

