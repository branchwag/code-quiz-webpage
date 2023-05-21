function countdown() {
    var seconds = 59;
    function tick() {
      var counter = document.getElementById("counter");
      seconds--;
      counter.innerHTML =
        "0:" + (seconds < 10 ? "0" : "") + String(seconds);
      if (seconds > 0) {
        setTimeout(tick, 1000);
      } else {
        document.getElementById("verifiBtn").innerHTML = `
            <div class="Btn" id="ResendBtn">
                <button type="submit">Resend</button>
            </div>
        `;
        document.getElementById("counter").innerHTML = "";
      }
    }
    tick();
  }
  countdown();

  // var questionTracker = 0;
  questionTracker + 1;//

  console.log("This is the questiontracker value in the countdown function " + questionTracker);
  console.log("The array length minus one is " + (quizQandAs.length - 1));