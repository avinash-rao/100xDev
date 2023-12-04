// Create a counter (counts down from 30 to 0)

let timeleft = 30;

let timer = setInterval(countdown, 1000);

function stopTimer(timerId) {
    clearInterval(timerId)
}

function countdown() {
    if (timeleft === 0) {
        stopTimer(timer)
    }
    console.log(timeleft);
    timeleft--;
}