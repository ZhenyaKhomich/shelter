data = [
  {
    name: 'Виктор Цой - Сосны на морском берегу',
    src: 'assets/music/sosny.mp3',
    img: 'assets/img/tsoy1.jpg',
    time: '0:00',
  },
  {
    name: 'Виктор Цой - Группа крови',
    src: "assets/music/Gruppa_krovi.mp3",
    img: 'assets/img/tsoy2.jpg',
  },
  {
    name: 'Виктор Цой -',
    src: 'assets/music/sosny.mp3',
    img: 'assets/img/tsoy3.jpg',
  },
  {
    name: 'Виктор Цой -',
    src: 'assets/music/sosny-no-morskom-beregu.mp3',
    img: 'assets/img/tsoy4.jpg',
  },
  {
    name: 'Виктор Цой -',
    src: 'assets/music/Gruppa_krovi.mp3"',
    img: 'assets/img/tsoy5.jpg',
  },
  {
    name: 'Виктор Цой -',
    src: 'assets/music/Gruppa_krovi.mp3"',
    img: 'assets/img/tsoy6.jpg',
  },
  {
    name: 'Виктор Цой -',
    src: 'assets/music/Gruppa_krovi.mp3"',
    img: 'assets/img/tsoy7.jpg',
  },
  {
    name: 'Виктор Цой -',
    src: 'assets/music/Gruppa_krovi.mp3"',
    img: 'assets/img/tsoy8.png',
  },
  {
    name: 'Виктор Цой -',
    src: 'assets/music/Gruppa_krovi.mp3"',
    img: 'assets/img/tsoy9.jpeg',
  },
  {
    name: 'Виктор Цой -',
    src: 'assets/music/Gruppa_krovi.mp3"',
    img: 'assets/img/tsoy10.jpg',
  },
];


const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const audio = document.querySelector('audio');
const timeProgress = document.querySelector('.timeProgress');
const timeNow = document.querySelector('.timeNow');
const timeAll = document.querySelector('.timeAll');
let onOff = false;
let count = 0;
pause.hidden = 'true';

window.addEventListener('DOMContentLoaded', function () {
  let imgs = document.querySelectorAll('img');
  imgs.forEach((el) => el.src = data[count].img);

  let title = document.querySelector('.title');
  title.innerHTML = data[count].name;

  let music = document.querySelector('audio');
  music.src = data[count].src;

  console.log(timeProgress.value);



})

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

next.addEventListener('click', function () {
  ++count;
  if(count == 10) {
    count = 0;
  }
  
  let imgs = document.querySelectorAll('img');
  imgs.forEach((el) => el.src = data[count].img);

  let title = document.querySelector('.title');
  title.innerHTML = data[count].name;

  let music = document.querySelector('audio');
 music.src = data[count].src;

})









function timeNo(seconds) {
  if(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return minutes + ':' + (secs < 10 ? '0' : '') + secs;
  } if(seconds == 0) {
    return '0:00'
  }else {
    audio.addEventListener('loadedmetadata', function () {
      timeAll.textContent = timeNo(audio.duration);
    });
  }
}

audio.addEventListener('timeupdate', function () {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  timeProgress.value = (currentTime / duration) * 100;
  if(currentTime == 0) {
    timeProgress.value = 0;
  };
  timeNow.textContent = timeNo(currentTime);
});

window.addEventListener('DOMContentLoaded', function() {
timeAll.textContent = timeNo(audio.duration);
});

timeProgress.addEventListener('input', function () {
  const duration = audio.duration;
  const value = timeProgress.value;
  audio.currentTime = (value / 100) * duration;
});
