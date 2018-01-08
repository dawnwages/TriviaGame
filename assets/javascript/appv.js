var number = 100;

var IntervalId;

$("#startGame").on("click", run);

function run() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    //decreaes number by one.
    number--;
    $("#timer").html("<h3>"+ number +"</h3>");

    if (number === 0){
        stop();
        alert
    }
}