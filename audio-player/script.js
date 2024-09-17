let play = document.querySelector('.play');
let pause = document.querySelector('.pause');
let audio = document.querySelector('audio');
let onOff = false;
const timeProgress = document.querySelector('.timeProgress');
const timeNow = document.querySelector('.timeNow');

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

audio.addEventListener('timeupdate', function () {
  const currentTime = audio.currentTime;
  const duration = audio.duration;

console.log(duration);
console.log(currentTime);
  
  timeProgress.value = (currentTime / duration) * 100;

  timeNow.textContent = formatTime(currentTime);
});
console.log(timeNow.textContent);



