import {data} from "/moduls/randomImg.js"
import {randomArrays} from "/moduls/randomImg.js"
import {createImg} from "/moduls/randomImg.js"
import {winLose} from "/moduls/modalWindow.js"
import {start} from "/moduls/startRestartButtons.js"
import {restart} from "/moduls/startRestartButtons.js"
import {stop} from "/moduls/startRestartButtons.js"

const darkModal = document.querySelector('.darkModal');
const wrapModal = document.querySelector('.wrapModal');
const userNameModal = document.querySelector('.userNameModal');
const play = document.querySelector('.butPlay');
const restartBut = document.querySelector('.butRestart');
const stopBut = document.querySelector('.butStop');
console.log(stopBut)
let cartFones;
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
let playAction = false;
console.log(randomImg);

function rotatingImages () {
  createImg(randomImg);
  cartFones = document.querySelectorAll('.cartFone');
  
//убрал setTimaut
    cartFones.forEach((cartFone) => {
    cartFone.src = "assets/image/fonCart.jpg";
    cartFone.style.transform = 'matrix(-1, 0, 0, 1, 0, 1)';
  })
}
rotatingImages();

  window.addEventListener('load', function () {
  const cartFones = document.querySelectorAll('.cartFone');

  cartFones.forEach((cartFone) => {
  cartFone.classList.add('disabl');

    play.addEventListener('click', () => {
      
      playAction = true;
      start(cartFones);
      cartFone.classList.remove('disabl');

      cartFone.addEventListener('click', function () {
        if(playAction) {
          cartFone.style.transform = 'matrix(0.1, 0, 0, 1, 0.1, 0.1)';
          
          let datanum = event.target.getAttribute('datanum');
          let num = event.target.getAttribute('num');
          console.log(datanum)
    
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
    
              if(stepCount < 2) {
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
        }
      })
    });
  })
})

document.addEventListener('DOMContentLoaded', function () {
darkModal.style.display = 'none';
wrapModal.style.display = 'none';
userNameModal.style.display = 'none';
stopBut.style.display = 'none';
restartBut.setAttribute('disabled','true');
restartBut.classList.add('disabl');
})

play.addEventListener('click', () => {start(cartFones)});

restartBut.addEventListener('click',() => {restart(cartFones, count=0, firstCart, secondCart, stepCount = 15, scoreCount=0, firstNum, secondNum, score, step)});

// restartBut.addEventListener('click', function () {
//   cartFones.forEach((cartFone) => {
//     cartFone.src = "assets/image/fonCart.jpg";
//     cartFone.style.transform = 'matrix(-1, 0, 0, 1, 0, 1)';
//   })

//   count = 0;
//   firstCart = 0;
//   secondCart = 0;
//   stepCount = 15;
//   scoreCount = 0;
//   firstNum = '';
//   secondNum = '';
//   score.innerHTML = `Score: 0`;
//   step.innerHTML = `Step: 15`;
//  })

// stopBut.addEventListener('click', function () {
//   randomImg = randomArrays(data);
//   console.log(randomImg)
//   let i = 0;
//   cartFones = document.querySelectorAll('.cartFone');
//   cartFones.forEach((cartFone) => {
//     cartFone.src = `assets/image/img${randomImg[i].num}.jpg`;
//     ++i;
//   });
// });


stopBut.addEventListener('click', () => { stop (randomImg,   randomArrays, data, cartFones, playAction = false, stopBut)
});
