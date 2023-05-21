function countdown() {
    var seconds = 60;

        //only tick if the quiz is still going
    //if element id exists
    // console.log(document.getElementById("timer"));
    // console.log(typeof(document.getElementById("timer")));

    if (document.getElementById("timer") !== null) {
        tick();
    }
    else {
        console.log("Timer is no longer needed");
        // clearTimeout();
    }

        function tick() {
        var counter = document.getElementById("timer");
        seconds--;
        counter.innerHTML =
            "Timer:" + (seconds < 10 ? "0" : "") + String(seconds);
        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            //clearTimeout();
            document.getElementById("contentbox").innerHTML = "TIMES UP!!";
            document.getElementById("timer").innerHTML = "";
        }
        }


  }


          //update timer to lose time
        //subtract from timer
        // subtractTimer();

        // function subtractTimer() {
//     secondCount - 20;
//     return console.log(secondCount);
// }            

// console.log(secondCount);

console.log("The score inside the makeQuestion function is " + score);
        storeScore();


    //clearInterval(intTimerID2);

    //variable to keep track of if game has ended already
// var endGameRun = 0

    //if endGame function has run
    // if (endGameRun > 0) {
    // console.log("The score is " + score);
    // }


            //boxwithButtons = document.getElementById("answersbox")
        //feedback.innerHTML = "";


        // function storeScore() {
    
//     // console.log("This is the store score function.")
// }