export const data = [
  {
    img: "assets/image/img0.jpg",
    num: '0',
  },
  {
    img: "assets/image/img1.jpg",
    num: '1',
  },
  {
    img: "assets/image/img2.jpg",
    num: '2',
  },
  {
    img: "assets/image/img3.jpg",
    num: '3',
  },
  {
    img: "assets/image/img4.jpg",
    num: '4',
  },
  {
    img: "assets/image/img5.jpg",
    num: '5',
  },
  {
    img: "assets/image/img6.jpg",
    num: '6',
  },
  {
    img: "assets/image/img7.jpg",
    num: '7',
  },
  {
    img: "assets/image/img8.jpg",
    num: '8',
  },
  {
    img: "assets/image/img9.jpg",
    num: '9',
  },
  {
    img: "assets/image/img10.jpg",
    num: '10',
  },
  {
    img: "assets/image/img11.jpg",
    num: '11',
  },
  {
    img: "assets/image/img12.jpg",
    num: '12',
  },
  {
    img: "assets/image/img13.jpg",
    num: '13',
  },
  {
    img: "assets/image/img14.jpg",
    num: '14',
  },
  {
    img: "assets/image/img15.jpg",
    num: '15',
  },
  {
    img: "assets/image/img16.jpg",
    num: '16',
  },
]


export function randomArrays (arr) {

  let firstArray = [];
  let secondArray = [];
  let arrayImg = [];
  let set = new Set();

  while(firstArray.length < 9) {
    let a = Math.floor(Math.random() * arr.length);
    set.add(arr[a]);
    firstArray = Array.from(set);
  }

  set.clear()

  while(secondArray.length < 9) {
    let a = Math.floor(Math.random() * firstArray.length);
    set.add(firstArray[a]);
    secondArray = Array.from(set);
  }

  let arrImg = arrayImg.concat(firstArray, secondArray);
  return arrImg;
}

export function createImg (arr, count) {
  let wrapMain = document.querySelector('.wrapMain');
  for(let i = 0; i < 18; i++) {
    count = 0;
    let img = document.createElement('img');
    img.classList.add('cartFone');
    img.classList.add('disabl');
    img.alt = 'image';
    img.src = `${arr[i].img}`;
    img.setAttribute('num', `${i}`);
    img.setAttribute('dataNum', `${arr[i].num}`);
    wrapMain.append(img);
  }
}


// export function createImgFone () {
//   let wrapMain = document.querySelector('.wrapMain');
//   for(let i = 0; i < 18; i++) {
//     let img = document.createElement('img');
//     img.classList.add('cartFone');
//     img.alt = 'image';
//     img.src = 'assets/image/fonCart.jpg';
//     img.setAttribute('num', `${i}`);
//     wrapMain.append(img);
//   }
// }


















//резерв


// import {data} from "/moduls/randomImg.js"
// import {randomArrays} from "/moduls/randomImg.js"
// import {createImg} from "/moduls/randomImg.js"
// import {winLose} from "/moduls/modalWindow.js"
// import {start} from "/moduls/startRestartButtons.js"
// import {restart} from "/moduls/startRestartButtons.js"


// const darkModal = document.querySelector('.darkModal');
// const wrapModal = document.querySelector('.wrapModal');
// const userNameModal = document.querySelector('.userNameModal');
// const play = document.querySelector('.butPlay');
// const restartBut = document.querySelector('.butRestart');
// const stopBut = document.querySelector('.butStop');
// const userValue = document.querySelector('.input');
// const noBut = document.querySelector('.no');
// const yesBut = document.querySelector('.yes');
// let score = document.querySelector('.score');
// let step = document.querySelector('.step');
// let use = document.querySelector('.use');
// localStorage.setItem('gameCount', '0');
// let gameCount = localStorage.getItem('gameCount');
// let userSign = document.querySelector('.user-sign');
// let userName = localStorage.getItem(`name`);
// let scoreCount = 0;
// let stepCount = 15;
// let randomImg = randomArrays(data);
// let cartFones;
// let firstCart;
// let firstNum;
// let secondCart;
// let secondNum;
// let aaa = 0;
// let count = 0;
// let repeat;
// let winCount = 0;
// let playAction = false;


// function rotatingImages () {
//   createImg(randomImg);
//   cartFones = document.querySelectorAll('.cartFone');
  
// //убрал setTimaut
//     cartFones.forEach((cartFone) => {
//     cartFone.src = "assets/image/fonCart.jpg";
//     cartFone.style.transform = 'matrix(-1, 0, 0, 1, 0, 1)';
//     cartFone.classList.add('disabl-cart');
//   })
// }
// rotatingImages();

//   window.addEventListener('load', function () {
//   // cartFones = document.querySelectorAll('.cartFone');

//   repeat = function repeat () {

//     cartFones.forEach((cartFone) => {
      
//       let att;
//       if(aaa == 1) {
//         cartFones.forEach((cartFone) => {
//           cartFone.removeEventListener('click', att);
       
        
//         cartFone.addEventListener('click', att);
//         })
//       }
    
      
    
//         play.addEventListener('click', () => {
//           cartFone.classList.add('disabl');
//           restartBut.classList.add('resActive');

//           start(cartFones);
//           cartFone.classList.remove('disabl-cart');

//           att = cartFone.addEventListener('click', att)

//             if(aaa == 1) {
//               cartFones.forEach((cartFone) => {
//                 cartFone.removeEventListener('click', att);
//               aaa = 0;
//               })
//             }

//           function att () {
//             playAction = true;
          
      
//             if(playAction) {
//               cartFone.style.transform = 'matrix(0.1, 0, 0, 1, 0.1, 0.1)';
              
//               let datanum = event.target.getAttribute('datanum');
//               let num = event.target.getAttribute('num');
    
//               if(cartFone.getAttribute('src') == `assets/image/img${datanum}.jpg`) {
//                 cartFone.style.transform = 'none';
//                 return false;
//               }
//               else if(count == 0) {
//                 firstCart = datanum;
//                 firstNum = num
//                 count++;
//               } else if (count == 1) {
//                 secondCart = datanum;
//                 secondNum = num;
//                 ++count;
//               } 
              
//               if (count == 2) {
//                 if(firstCart == secondCart) {
//                   ++winCount;
//                   if(winCount == 1) {   //тут на 0 надо исправить
//                     if(gameCount == 11) {
//                       gameCount = 0;
//                     }
//                     gameCount++
//                      localStorage.setItem(`gameCount`, gameCount);
//                     gameCount = localStorage.getItem('gameCount')
//                     console.log(gameCount)
//                     winCount = 0;
//                     scoreCount = scoreCount += 5;
//                     stepCount = stepCount -= 1;
//                     scoreCount += stepCount * 10;
//                     score.innerHTML = `Score: ${scoreCount}`;

                   
                   
//                     setTimeout(()=> {
//                        localStorage.setItem(`score${gameCount}`, scoreCount);
                    
//                        let userScore = localStorage.getItem(`score${gameCount}`);
//                       let userName = localStorage.getItem(`name`);
//                       updateTableData(userName, userScore);
//                     //  loadTable ()
//                     },1000)
                    
//                     scoreCount = scoreCount -= 5;
//                     stepCount = stepCount += 1;
//                     setTimeout (() => {
//                       darkModal.style.display = '';
//                       wrapModal.style.display = '';
//                       winLose(0, scoreCount, stepCount);
//                       const modalStop = document.querySelector('.butEnd');
//                       const modalRestart = document.querySelector('.butAgain');
                      
    
//                       modalStop.addEventListener('click', () => { stop ()
//                         const modal = document.querySelector('.modal');
//                         modal.remove();
//                         darkModal.style.display = 'none';
//                         wrapModal.style.display = 'none';
//                       });
                      
//                       modalRestart.addEventListener('click',() => {restart(cartFones, count=0, firstCart, secondCart, stepCount = 15, scoreCount=0, firstNum, secondNum, score, step, winCount=0)
//                         const modal = document.querySelector('.modal');
//                         modal.remove();
//                         darkModal.style.display = 'none';
//                         wrapModal.style.display = 'none';});
//                     }, 1000);
//                   }

//                   count = 0;
//                   firstCart = 0;
//                   secondCart = 0;
//                   firstNum = 0;
//                   secondNum = 0;
                
//                     score.innerHTML = `Score: ${scoreCount += 5}`;
//                     step.innerHTML = `Step: ${stepCount -= 1}`;
                  
                  
                  
//                 } else if (firstCart != secondCart) {
                
//                   cartFones.forEach((cartFone) => {
                    
//                     if(cartFone.getAttribute('num') == firstNum || cartFone.getAttribute('num') == secondNum) {
//                       setTimeout(() => {
//                       cartFone.src = "assets/image/fonCart.jpg";
//                       cartFone.style.transform = 'matrix(-1, 0, 0, 1, 0, 1)';
//                       }, 1000);
//                     }
//                   })
        
//                   count = 0;
//                   firstCart = 0;
//                   secondCart = 0;
//                   firstNum = 0;
//                   secondNum = 0;
                

//                     score.innerHTML = `Score: ${scoreCount -= 2}`;
//                     step.innerHTML = `Step: ${stepCount -= 1}`;
                  
        
//                   if(scoreCount < 0) {
//                     scoreCount = 0;
//                     score.innerHTML = `Score: ${scoreCount}`;
//                   }
        
//                   if(stepCount < 1) {
//                     stepCount = 0;
//                     setTimeout (() => {
//                       darkModal.style.display = '';
//                       wrapModal.style.display = '';
//                       winLose(1, scoreCount, stepCount);
//                       const modalStop = document.querySelector('.butEnd');
//                       const modalRestart = document.querySelector('.butAgain');
    
//                       modalStop.addEventListener('click', () => { stop ()
//                         const modal = document.querySelector('.modal');
//                         modal.remove();
//                         darkModal.style.display = 'none';
//                         wrapModal.style.display = 'none';
//                       });
                      
//                       modalRestart.addEventListener('click',() => {restart(cartFones, count=0, firstCart, secondCart, stepCount = 15, scoreCount=0, firstNum, secondNum, score, step, winCount=0)
//                         const modal = document.querySelector('.modal');
//                         modal.remove();
//                         darkModal.style.display = 'none';
//                         wrapModal.style.display = 'none';});
    
//                     }, 1000);
                    
//                   }
//                 }
//               }
//                 setTimeout(()=> {
//                 cartFone.src = `assets/image/img${datanum}.jpg`;
//                 cartFone.style.transform = 'matrix(1, 0, 0, 1, 0, 1)';
                
//               }, 400)
//             }
//           }
//           // })
//         });
//       })
//   }

//   repeat ();
// })

// document.addEventListener('DOMContentLoaded', function () {

//   if(userName) {
//     console.log('1111')
//     // userName = localStorage.setItem(`name${gameCount}`, userName)
//     darkModal.style.display = 'none';
//     userNameModal.style.display = 'none';
//     wrapModal.style.display = 'none';
//     stopBut.style.display = 'none';
//     restartBut.setAttribute('disabled','true');
//     restartBut.classList.add('disabl');
//   } else {
//     darkModal.style.display = '';
//     userNameModal.style.display = '';
//     wrapModal.style.display = 'none';
//     stopBut.style.display = 'none';
//     restartBut.setAttribute('disabled','true');
//     restartBut.classList.add('disabl');
//   }

// })

// play.addEventListener('click', () => {start(cartFones)});

// restartBut.addEventListener('click',() => {restart(cartFones, count=0, firstCart, secondCart, stepCount = 15, scoreCount=0, firstNum, secondNum, score, step, winCount=0)});



// // restartBut.addEventListener('click', function () {
// //   cartFones.forEach((cartFone) => {
// //     cartFone.src = "assets/image/fonCart.jpg";
// //     cartFone.style.transform = 'matrix(-1, 0, 0, 1, 0, 1)';
// //   })

// //   count = 0;
// //   firstCart = 0;
// //   secondCart = 0;
// //   stepCount = 15;
// //   scoreCount = 0;
// //   firstNum = '';
// //   secondNum = '';
// //   score.innerHTML = `Score: 0`;
// //   step.innerHTML = `Step: 15`;
// //  })

// // stopBut.addEventListener('click', function () {
// //   randomImg = randomArrays(data);
// //   console.log(randomImg)
// //   let i = 0;
// //   cartFones = document.querySelectorAll('.cartFone');
// //   cartFones.forEach((cartFone) => {
// //     cartFone.src = `assets/image/img${randomImg[i].num}.jpg`;
// //     ++i;
// //   });
// // });






// stopBut.addEventListener('click', stop);

// function stop () {
//   count=0;
//   firstCart = 0;
//   winCount = 0;
//   playAction = false;
//   secondCart = 0;
//   stepCount = 15;
//   scoreCount = 0;
//   firstNum = '';
//   aaa = 1;
//   secondNum = '';
//   score.innerHTML = `Score: 0`;
//   step.innerHTML = `Step: 15`;

//   playAction = 'false';
//   randomImg = randomArrays(data);


//   cartFones.forEach((cartFone) => {
//     cartFone.remove();
//   })

//   rotatingImages();

//   cartFones.forEach((cartFone) => {
  
//   cartFone.classList.remove('disabl');
//   setTimeout(() => {
//       cartFone.src = "assets/image/fonCart.jpg";
//       cartFone.style.transform = 'matrix(1, 0, 0, 1, 0, 1)';
//     });
// })

//   const play = document.querySelector('.butPlay');
//   const stop = document.querySelector('.butStop');
//   const restart = document.querySelector('.butRestart');
//   play.style.display = '';
//   stop.style.display = 'none';
//   restart.getAttribute('disabled', 'true');
//   restart.classList.add('disabl');
//   restartBut.classList.remove('resActive');
// repeat();
// };







// noBut.addEventListener('click', function () {
//   userValue.classList.remove('noInput');
// })

// userValue.addEventListener('input', function () {
//   if(userValue.value) {
//   userValue.classList.add('noInput');
//   yesBut.addEventListener('click', function () {
//     let user = userValue.value;
//     // darkModal.style.display = 'none';
//     // userNameModal.style.display = 'none';
    
//     localStorage.setItem(`name`, user);
    

//   })
// } else {
//   userValue.classList.remove('noInput');
// }
// })

// setInterval(() => {
//   use.innerHTML = localStorage.getItem(`name`)
// },100)


// userSign.addEventListener('click', function () {
//     darkModal.style.display = '';
//     userNameModal.style.display = '';
//     // use.innerHTML = `${localStorage.getItem('name')}`
// })











// function updateTableData(nam, sco) {
//   const tableBody = document.querySelector('tbody');
//   const rows = Array.from(tableBody.querySelectorAll('tr'));

//   let rowToUpdate = rows[9].querySelectorAll('td'); 
 

//   rowToUpdate[1].textContent = `${nam}`; 
//   rowToUpdate[2].textContent = `${sco}`;    
   
  
//   rows.sort((a, b) => {
//     const scoreA = parseInt(a.querySelector('.scor').textContent, 10);
//     const scoreB = parseInt(b.querySelector('.scor').textContent, 10);
//     return scoreB - scoreA; 
//   });

  
//   // tableBody.innerHTML = ''; 

 
//   rows.forEach((row, index) => {
//     tableBody.append(row); 
//     row.querySelectorAll('td')[0].textContent = index + 1;
//   });
// }






// function loadTable () {
//   const tableBody = document.querySelector('tbody');
//   const rows = Array.from(tableBody.querySelectorAll('tr'));
  
//   for(let i = 1; i <= localStorage.getItem('gameCount'); i++) {
//     let score = localStorage.getItem(`score${i}`);
//     let name = localStorage.getItem(`name${i}`);

//      let rowToUpdate = rows[i-1].querySelectorAll('td');

  
//      rowToUpdate[1].textContent = `${name}`; 
//      rowToUpdate[2].textContent = `${score}`; 
  
//   }
  

  

//   rows.forEach((row, index) => {
//     tableBody.append(row); 
//     row.querySelectorAll('td')[0].textContent = index + 1;
//   });
// }

// loadTable()

