export function start (a) {  

  a.forEach((cartFone) => {

  cartFone.src = `assets/image/img${cartFone.getAttribute('datanum')}.jpg`
  cartFone.style.transform = 'matrix(1, 0, 0, 1, 0, 1)';
    });

    setTimeout(()=> {
      a.forEach((cartFone) => {
      cartFone.src = "assets/image/fonCart.jpg";
      cartFone.style.transform = 'matrix(-1, 0, 0, 1, 0, 1)';
    })
  }, 5000)

  const restart = document.querySelector('.butRestart');
  const play = document.querySelector('.butPlay');
  const stop = document.querySelector('.butStop');
  restart.removeAttribute('disabled');
  restart.classList.remove('disabl');
  play.style.display = 'none';
  stop.style.display = '';
  }


export function restart (a, count, firstCart, secondCart, stepCount, scoreCount, firstNum, secondNum, score, step, winCount) {
  a.forEach((cartFone) => {
    cartFone.src = "assets/image/fonCart.jpg";
    cartFone.style.transform = 'matrix(-1, 0, 0, 1, 0, 1)';
  })

  count=0;
  firstCart = 0;
  winCount = 0;
  secondCart = 0;
  stepCount;
  scoreCount;
  firstNum = '';
  secondNum = '';
  score.innerHTML = `Score: 0`;
  step.innerHTML = `Step: 15`;
 }
