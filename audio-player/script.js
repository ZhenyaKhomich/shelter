const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const audio = document.querySelector('audio');
const timeProgress = document.querySelector('.timeProgress');
const timeNow = document.querySelector('.timeNow');
const timeAll = document.querySelector('.timeAll');
let onOff = false;
pause.hidden = 'true';

play.addEventListener('click', function () {
  if(!onOff) {
    audio.play();
    pause.hidden = '';
    play.hidden = 'true';
    onOff = true;
  }
})

pause.addEventListener('click', function () {
  if(onOff) {
    audio.pause();
    onOff = false;
    pause.hidden = 'true';
    play.hidden = '';
  }
})

function timeNo(seconds) {
  if(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return minutes + ':' + (secs < 10 ? '0' : '') + secs;
  } else {
    audio.addEventListener('loadedmetadata', function () {
      timeAll.textContent = timeNo(audio.duration);
    });
  }
}

audio.addEventListener('timeupdate', function () {
  const currentTime = audio.currentTime;
  const duration = audio.duration;

  timeProgress.value = (currentTime / duration) * 100;

  timeNow.textContent = timeNo(currentTime);
  timeAll.textContent = timeNo(duration);
});

window.addEventListener('DOMContentLoaded', function() {
timeAll.textContent = timeNo(audio.duration);
});

timeProgress.addEventListener('input', function () {
  const duration = audio.duration;
  const value = timeProgress.value;
  audio.currentTime = (value / 100) * duration;
});
