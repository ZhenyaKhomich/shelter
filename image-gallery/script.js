const formSearch = document.querySelector(".formSearch");
const searchArea = document.querySelector(".searchArea");
const butSearch = document.querySelector(".butSearch");
let ask = '';

formSearch.addEventListener('submit', function () {
  event.preventDefault()
  ask = searchArea.value.trim();
  console.log(ask);
  searchPhoto(ask);
  
})

formSearch.addEventListener('keypress', function () {
  if (event.keyCode == 13) {}
})


  function searchPhoto (ask) {
    console.log(ask);
      let k = fetch (`https://api.unsplash.com/search/photos?query=${ask}&per_page=30&client_id=n_tIVduhSi3wQx58WdnfrXOF1zw-0wOzcoYCIQDSN58`)
      .then((response) => response.json())
      .then((a)=> createPhoto(a.results));
      console.log(k)
      k = '';
      ask = '';
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

     img.height = 400;
     img.width = 400;

    // if(img.height > 300) {
    //   imagesCont.append(img);
    // } else {
      
    // }
imagesCont.prepend(img);
      

    })
    ask = '';
  }

  

  console.log(ask);