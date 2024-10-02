import {data} from "/moduls/data.js"
import {randomArrays} from "/moduls/randomImg.js"

const darkModal = document.querySelector('.darkModal');
const wrapModal = document.querySelector('.wrapModal');

let randomImg = randomArrays(data) 

// console.log(randomArrays(data));

window.addEventListener('load', function () {
  const cartFones = document.querySelectorAll('.cartFone');

  cartFones.forEach((cartFone) => {
    cartFone.addEventListener('click', function () {
      cartFone.style.transform = 'matrix(0.1, 0.1, 0, 1, 0, 0)';
    
      setTimeout(()=> {
        cartFone.src = "assets/image/img15.jpg";
        cartFone.style.transform = 'matrix(-1, 0, 0, 1, 0, 0)';
      }, 700)
    })
  })
})

document.addEventListener('DOMContentLoaded', function () {
darkModal.style.display = 'none';
wrapModal.style.display = 'none';
})

