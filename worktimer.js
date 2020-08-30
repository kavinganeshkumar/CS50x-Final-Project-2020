let start = document.querySelector("#start");
let pause = document.querySelector("#pause");
let stop = document.querySelector("#stop");

let minutes = document.querySelector("#minutes");
minutes.innerText = 25;
let seconds = document.querySelector("#seconds");
console.log(seconds);
seconds.innerText = "00";

var s;
let isPaused = false;
function startTimer(e) {
	let startingMinutes = 24;
	minutes.innerText = startingMinutes;
	let startingSeconds = 59;
	seconds.innerText = startingSeconds;
	
	s = setInterval (function () {
		if (!isPaused) {
			startingSeconds -= 1;
			seconds.innerText = startingSeconds;
			
			if (startingSeconds === 0) {
				startingMinutes -= 1;
				minutes.innerText = startingMinutes;
				startingSeconds = 59;
			}
			
			if (startingMinutes < 0) {
				clearInterval(s);
			}
		}
	}, 1000);
}

function pauseTimer(e) {
	isPaused = !isPaused;
}

function stopTimer(e) {
	if (s) {
		clearInterval(s);
	}
	let startingMinutes = 25;
	minutes.innerText = startingMinutes;
	let startingSeconds = "00";
	seconds.innerText = startingSeconds;
}

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
stop.addEventListener("click", stopTimer);