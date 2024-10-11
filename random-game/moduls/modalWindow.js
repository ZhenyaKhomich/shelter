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

export function winLose (i, score, stepCount) {
    const wrapModal = document.querySelector('.wrapModal');

    let modal = document.createElement('div');
    modal.classList.add('modal');

    let img = document.createElement('img');
    img.classList.add('smile');
    img.src = result[i].img;

    let text = document.createElement('div');
    text.classList.add('text');
    text.innerHTML = result[i].text;

    let moves = document.createElement('div');
    moves.classList.add('res');
    moves.innerHTML = `Your moves: ${15 - stepCount}`;

    let res = document.createElement('div');
    res.classList.add('res');
    res.innerHTML = `Your score: ${score}`;

    let butAgain = document.createElement('div');
    butAgain.classList.add('butAgain');
    butAgain.innerHTML = 'Restart';

    let butEnd = document.createElement('div');
    butEnd.classList.add('butEnd');
    butEnd.innerHTML = 'New game';
    
    modal.append(img);
    modal.append(text);
    modal.append(moves);
    modal.append(res);
    modal.append(butAgain);
    modal.append(butEnd);
    console.log(modal);
    wrapModal.append(modal);
}


