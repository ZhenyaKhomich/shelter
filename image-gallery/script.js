const formSearch = document.querySelector(".formSearch");
const searchArea = document.querySelector(".searchArea");
const butSearch = document.querySelector(".butSearch");
const butRemoveSearch = document.querySelector(".krestLup");
const wrap = document.querySelector(".wrap");
const wrapModal = document.querySelector(".wrapModal");
const images = document.querySelector(".images");
const imgs = document.querySelectorAll(".imgGen");

let ask = '';

window.addEventListener('DOMContentLoaded', function() {
  console.log(wrap);
  wrap.style.display = 'none';
  wrapModal.style.display = 'none';

  function searchPhotoLoad () {
    let k = fetch (`https://api.unsplash.com/photos/random?count=6&client_id=n_tIVduhSi3wQx58WdnfrXOF1zw-0wOzcoYCIQDSN58`) 
    .then((response) => response.json())
    .then((photos)=> createPhoto(photos));
  }

  searchPhotoLoad ();
})

images.addEventListener('click', function () {
  const wrap = document.querySelector('.wrap');
  const wrapModal = document.querySelector('.wrapModal');
  const modal = document.querySelector('.modal');
  if(event.target.classList == 'imgGen') {
    let currentImg = event.target;
    currentImg.setAttribute('width', 'auto');
    currentImg.setAttribute('height', 'auto');
    console.log(currentImg.width);
    modal.prepend(currentImg);

    wrap.style.display = '';
    wrapModal.style.display = '';

  }
})


formSearch.addEventListener('submit', function () {
  event.preventDefault()
  ask = searchArea.value.trim();
  console.log(ask);
  searchPhoto(ask);
  
})

formSearch.addEventListener('keypress', function () {
  if (event.keyCode == 13) {}
})

butRemoveSearch.addEventListener('click', function () {
  searchArea.value = '';
  
  console.log(1);
})

  function searchPhoto (ask) {
    let k = fetch (`https://api.unsplash.com/search/photos?query=${ask}&per_page=30&client_id=n_tIVduhSi3wQx58WdnfrXOF1zw-0wOzcoYCIQDSN58`)
    .then((response) => response.json())
    .then((a)=> createPhoto(a.results));
  }

  function createPhoto (obj) {
    const imagesCont = document.querySelector('.images');
    let photos = imagesCont.querySelectorAll('.imgGen');
    photos.forEach((el) => el.remove());

    obj.forEach((el) => {
      let img = document.createElement('img');
      img.src = el.urls.small
      img.classList.add('imgGen');
      img.alt = 'picture';

      img.height = 340;
      img.width = 340;

      imagesCont.prepend(img);
    })
    ask = '';
  }
