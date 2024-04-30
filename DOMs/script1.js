//11
document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('element');
    let posX = 0;
    let posY = 0;
  
    function moverElemento(event) {
      const paso = 10;
  
      switch (event.key) {
        case 'ArrowUp':
          posY -= paso;
          break;
        case 'ArrowDown':
          posY += paso;
          break;
        case 'ArrowLeft':
          posX -= paso;
          break;
        case 'ArrowRight':
          posX += paso;
          break;
        default:
          return; // No hacer nada si la tecla no es una flecha
      }
  
      element.style.top = posY + 'px';
      element.style.left = posX + 'px';
    }
  
    document.addEventListener('keydown', moverElemento);
  });
  
//12
let timerInterval;
let startTime;
let pausedTime = 0;
let running = false;

const startBtn= document.getElementById('startBtn');
const pauseBtn= document.getElementById('pauseBtn');
const stopBtn= document.getElementById('stopBtn');

startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
stopBtn.addEventListener('click', stop);

function start() {
  if (!running) {
    startTime = Date.now() - pausedTime;
    timerInterval = setInterval(updateTimer, 1000);
    running = true;
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    stopBtn.disabled = false;
  }
}

function pause() {
  if (running) {
    clearInterval(timerInterval);
    pausedTime = Date.now() - startTime;
    running = false;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    stopBtn.disabled = false;
  }
}

function stop() {
  clearInterval(timerInterval);
  running = false;
  pausedTime = 0;
  updateTimer();
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  stopBtn.disabled = true;
}

function updateTimer() {
  const elapsedTime = Date.now() - startTime;
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

  document.getElementById('timer').innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}