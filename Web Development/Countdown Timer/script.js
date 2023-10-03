let countdown;
const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const minutesInput = document.getElementById("minutes");

function timer(seconds) {
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;

  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  timerDisplay.textContent = display;
}

function startTimer() {
  const minutes = parseInt(minutesInput.value);
  if (isNaN(minutes) || minutes <= 0) {
    alert("Please enter a valid number of minutes.");
    return;
  }

  timer(minutes * 60);
  startButton.disabled = true;
  minutesInput.disabled = true;
}

function stopTimer() {
  clearInterval(countdown);
  startButton.disabled = false;
  minutesInput.disabled = false;
}

function resetTimer() {
  clearInterval(countdown);
  timerDisplay.textContent = "0:00";
  minutesInput.value = "";
  startButton.disabled = false;
  minutesInput.disabled = false;
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
