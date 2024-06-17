let startTime;
let elapsedTime = 0;
let timerInterval;

const display = document.querySelector('.display');
const lapsContainer = document.getElementById('laps');

function formatTime(ms) {
    let minutes = Math.floor(ms / 60000);
    let seconds = Math.floor((ms % 60000) / 1000);
    let milliseconds = Math.floor((ms % 1000));

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
}

function printTime() {
    display.innerHTML = formatTime(elapsedTime);
}

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTimeNow() {
        elapsedTime = Date.now() - startTime;
        printTime();
    }, 10);
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    printTime();
    lapsContainer.innerHTML = '';
}

function lapTimer() {
    const lapTime = elapsedTime;
    const lapItem = document.createElement('li');
    lapItem.textContent = formatTime(lapTime);
    lapsContainer.appendChild(lapItem);
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', lapTimer);
