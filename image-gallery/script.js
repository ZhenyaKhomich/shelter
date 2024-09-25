const formSearch = document.querySelector(".formSearch");
const searchArea = document.querySelector(".searchArea");
const butSearch = document.querySelector(".butSearch");
const butRemoveSearch = document.querySelector(".krestLup");
const wrap = document.querySelector(".wrap");
const wrapModal = document.querySelector(".wrapModal");
const modal = document.querySelector('.modal');
const images = document.querySelector(".images");
const imgs = document.querySelectorAll(".imgGen");
const closeModal = document.querySelector(".krest");



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
 
  if(event.target.classList == 'imgGen') {
    let currentImg = event.target;
    let src = currentImg.src;

    let img = document.createElement('img');
    img.classList.add('modalImg');
    img.src = src;
    img.alt = 'image';
    img.setAttribute('width', 'auto');
    img.setAttribute('height', 'auto');
    modal.prepend(img);
    wrap.style.display = '';
    wrapModal.style.display = '';
  }
})



wrapModal.addEventListener('click', function () {
  if(event.target.classList[0] !== 'modalImg') {
    const img = wrapModal.querySelector('.modalImg')

img.remove();
  
    wrap.style.display = 'none';
    wrapModal.style.display = 'none';
  }
})

closeModal.addEventListener('click', function () {
  // const img = wrapModal.querySelector('.imgGen')
  
  wrap.style.display = 'none';
  wrapModal.style.display = 'none';
})


formSearch.addEventListener('submit', function () {
  event.preventDefault()
  ask = searchArea.value.trim();
  if(ask == '') {
    if(images.contains(images.querySelector('.divError'))) {
      let divError = images.querySelector('.divError')
      divError.remove();
    } 
    
    let divError = document.createElement('div');
    divError.classList.add('divError');
    let error = document.createElement('p');
    error.classList.add('textError')
    error.innerHTML = "Please, enter the search word!"
    divError.append(error);
    images.append(divError);
  } else {
    searchPhoto(ask);
  }
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
    .then((a)=> {
      if(a.total == 0) {
        if(images.contains(images.querySelector('.divError'))) {
          let divError = images.querySelector('.divError')
          divError.remove();
      } 
        let divError = document.createElement('div');
        divError.classList.add('divError');
        let error = document.createElement('p');
        error.classList.add('textError')
        error.innerHTML = `The word "${ask}" was not found.<br>Please enter another word!`
        divError.append(error);
        images.append(divError);
      } 
      createPhoto(a.results)
    },
    (error) => {
      if(images.contains(images.querySelector('.divError'))) {
      let divError = images.querySelector('.divError')
      divError.remove();
  } 
    let divError = document.createElement('div');
    divError.classList.add('divError');
    let err = document.createElement('p');
    err.classList.add('textError')
    err.innerHTML = `Превышен лимит запросов на сервер. Пожалуйста, попробуйте проверить работу позже (в демо-версии разрешено делать 50 запросов в час) Если у вас возникнут какие-либо вопросы, вы всегда можете написать мне в discord! Спасибо!<br>"${error}"`
    divError.append(err);
    images.append(divError);}
    
    )
    
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
      img.setAttribute('title', 'Click to me');
      img.height = 340;
      img.width = 340;
      imagesCont.prepend(img);
    })
    ask = '';
  }
