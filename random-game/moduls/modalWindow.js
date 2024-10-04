
let result = [
    {
        img: "/assets/image/win.png",
        text: "YOU WIN!",
    },
    {
        img: "/assets/image/lose.png",
        text: "GAME OVER!"
    }
]

export function winLose (i, score) {
    const wrapModal = document.querySelector('.wrapModal');

    let modal = document.createElement('div');
    modal.classList.add('modal');

    let img = document.createElement('img');
    img.classList.add('smile');
    img.src = result[i].img;

    let text = document.createElement('div');
    text.classList.add('text');
    text.innerHTML = result[i].text;

    let res = document.createElement('div');
    res.classList.add('res');
    res.innerHTML = `Your score: ${score}`;

    let butAgain = document.createElement('div');
    butAgain.classList.add('butAgain');
    butAgain.innerHTML = 'Try Again';

    let butEnd = document.createElement('div');
    butEnd.classList.add('butAgain');
    butEnd.innerHTML = 'Finish';
    

    modal.append(img);
    modal.append(text);
    modal.append(res);
    modal.append(butAgain);
    modal.append(butEnd);
    console.log(modal);
    wrapModal.append(modal);
}


