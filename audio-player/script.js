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
    name: 'Виктор Цой - Печаль',
    src: 'assets/music/pechal.mp3',
    img: 'assets/img/tsoy3.jpg',
  },
  {
    name: 'Виктор Цой - Кончится лето',
    src: 'assets/music/konchitsja-leto.mp3',
    img: 'assets/img/tsoy4.jpg',
  },
  {
    name: 'Виктор Цой - Звезда по имени солнце',
    src: 'assets/music/solnce.mp3',
    img: 'assets/img/tsoy6.jpg',
  },
  {
    name: 'Виктор Цой - Следи за собой',
    src: 'assets/music/sledi-za-sobojj.mp3',
    img: 'assets/img/tsoy7.jpg',
  },
  {
    name: 'Виктор Цой - Мама мы все тяжело больны',
    src: 'assets/music/mama-my-vse-soshli-s-uma.mp3',
    img: 'assets/img/tsoy8.png',
  },
  {
    name: 'Виктор Цой - Видели ночь',
    src: 'assets/music/videli-noch.mp3',
    img: 'assets/img/tsoy9.jpeg',
  },
  {
    name: 'Виктор Цой - Восьмиклассница',
    src: 'assets/music/vosmiklassnica.mp3',
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
  onOff = false;
  pause.hidden = 'true';
  play.hidden = '';
  ++count;
  if(count == 9) {
    count = 0;
  }
  
  let imgs = document.querySelectorAll('img');
  imgs.forEach((el) => el.src = data[count].img);

  let title = document.querySelector('.title');
  title.innerHTML = data[count].name;

  let music = document.querySelector('audio');
 music.src = data[count].src;
})

prev.addEventListener('click', function () {
  onOff = false;
  pause.hidden = 'true';
  play.hidden = '';
  
  if(count == 0) {
    count = 9;
  }
  --count;
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
  } if(seconds >= 0) {
    return '0:00'
  }else {
    audio.addEventListener('loadedmetadata', function () {
      timeAll.textContent = timeNo(audio.duration);
    });
  }
}

audio.addEventListener('timeupdate', function () {
  let currentTime = audio.currentTime;
  const duration = audio.duration;
  timeProgress.value = (currentTime / duration) * 100;
  if(currentTime == 0) {
    timeProgress.value = 0;
  };
    timeNow.textContent = timeNo(currentTime);
  if(currentTime == duration) {
    timeProgress.value = 0;
    onOff = false;
    pause.hidden = 'true';
    play.hidden = '';
    currentTime = 0;
    console.log(currentTime)
    timeNow.textContent = timeNo(currentTime);
  } 
});

window.addEventListener('DOMContentLoaded', function() {
timeAll.textContent = timeNo(audio.duration);
});

timeProgress.addEventListener('input', function () {
  const duration = audio.duration;
  const value = timeProgress.value;
  audio.currentTime = (value / 100) * duration;
});
