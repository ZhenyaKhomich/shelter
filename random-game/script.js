import {data} from "/moduls/randomImg.js"
import {randomArrays} from "/moduls/randomImg.js"
import {createImg} from "/moduls/randomImg.js"
import {winLose} from "/moduls/modalWindow.js"
import {start} from "/moduls/startRestartButtons.js"

const darkModal = document.querySelector('.darkModal');
const wrapModal = document.querySelector('.wrapModal');
const userNameModal = document.querySelector('.userNameModal');
const cartFones = document.querySelectorAll('.cartFone');
let score = document.querySelector('.score');
let step = document.querySelector('.step');
let scoreCount = 0;
let stepCount = 15;
let randomImg = randomArrays(data);
let firstCart;
let firstNum;
let secondCart;
let secondNum;
let count = 0;

function rotatingImages () {
  createImg(randomImg);
  const cartFones = document.querySelectorAll('.cartFone');
  setTimeout(()=> {
    cartFones.forEach((cartFone) => {
    cartFone.src = "assets/image/fonCart.jpg";
    cartFone.style.transform = 'matrix(-1, 0, 0, 1, 0, 1)';
  })
})
}

rotatingImages();

window.addEventListener('load', function () {
  const cartFones = document.querySelectorAll('.cartFone');

  cartFones.forEach((cartFone) => {
    cartFone.addEventListener('click', function () {
      cartFone.style.transform = 'matrix(0.1, 0, 0, 1, 0.1, 0.1)';
    
      let datanum = event.target.getAttribute('datanum');
      let num = event.target.getAttribute('num');
      console.log(num)

      if(count == 0) {
        firstCart = datanum;
        firstNum = num
        count++;
      } else if (count == 1) {
        secondCart = datanum;
        secondNum = num;
        ++count;
      } 
      
      if (count == 2) {
        if(firstCart == secondCart) {
          console.log('yes');
          count = 0;
          firstCart = 0;
          secondCart = 0;
          firstNum = 0;
          secondNum = 0;
          score.innerHTML = `Score: ${scoreCount += 5}`;
          step.innerHTML = `Step: ${stepCount -= 1}`;
        } else if (firstCart != secondCart) {
          console.log('no');
          cartFones.forEach((cartFone) => {
            
            if(cartFone.getAttribute('num') == firstNum || cartFone.getAttribute('num') == secondNum) {
              setTimeout(() => {
              cartFone.src = "assets/image/fonCart.jpg";
              cartFone.style.transform = 'matrix(-1, 0, 0, 1, 0, 1)';
              }, 1000);
            }
          })

          count = 0;
          firstCart = 0;
          secondCart = 0;
          firstNum = 0;
          secondNum = 0;
          score.innerHTML = `Score: ${scoreCount -= 2}`;
          step.innerHTML = `Step: ${stepCount -= 1}`;
          if(scoreCount < 0) {
            scoreCount = 0;
            score.innerHTML = `Score: ${scoreCount}`;
          }
          if(stepCount == 14) {
            stepCount = 0;
            darkModal.style.display = '';
            wrapModal.style.display = '';
            winLose(1, scoreCount);
          }
        }
      }


      setTimeout(()=> {
        cartFone.src = `assets/image/img${datanum}.jpg`;
        cartFone.style.transform = 'matrix(1, 0, 0, 1, 0, 1)';
      }, 400)
    })
  })
})

document.addEventListener('DOMContentLoaded', function () {
darkModal.style.display = 'none';
wrapModal.style.display = 'none';
userNameModal.style.display = 'none';
})

