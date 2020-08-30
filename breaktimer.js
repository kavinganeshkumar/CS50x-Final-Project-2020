let breakStart = document.querySelector("#break-start");
let breakPause = document.querySelector("#break-pause");
let breakStop = document.querySelector("#break-stop");

let breakMinutes = document.querySelector("#break-minutes");
breakMinutes.innerText = 5;
let breakSeconds = document.querySelector("#break-seconds");
console.log(breakSeconds);
breakSeconds.innerText = "00";

var a;
let isBreakPaused = false;
function startBreakTimer(e) {
    let startingBreakMinutes = 4;
    breakMinutes.innerText = startingBreakMinutes;
    let startingBreakSeconds = 59;
    breakSeconds.innerText = startingBreakSeconds;

    a = setInterval (function () {
        if (!isBreakPaused) {
            startingBreakSeconds -= 1;
            breakSeconds.innerText = startingBreakSeconds;

            if (startingBreakSeconds === 0) {
                startingBreakMinutes -= 1;
                breakMinutes.innerText = startingBreakMinutes;
                startingBreakSeconds = 59;
            }

            if (startingBreakMinutes < 0) {
                clearInterval(a);
            }
        }
    }, 1000);
}

function pauseBreakTimer(e) {
    isBreakPaused = !isBreakPaused;
}

function stopBreakTimer(e) {
    if (a) {
        clearInterval(a);
    }
    let startingBreakMinutes = 5;
    breakMinutes.innerText = startingBreakMinutes;
    let startingBreakSeconds = "00";
    breakSeconds.innerText = startingBreakSeconds;
}

breakStart.addEventListener("click", startBreakTimer);
breakPause.addEventListener("click", pauseBreakTimer);
breakStop.addEventListener("click", stopBreakTimer);