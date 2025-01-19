const logoReturnToMainMenuEl =  document.querySelector('#navGameIcon');
// console.log(logoReturnToMainMenuEl);
const snakeBoard = document.querySelector('#game-board');

logoReturnToMainMenuEl.addEventListener('click', () => {
    // console.log('Button was clicked!')
    location.href = "./index.html"
})

const textReturnToMainMenuEl =  document.querySelector('#navGameText');
// console.log(textReturnToMainMenuEl);

textReturnToMainMenuEl.addEventListener('click', () => {
    // console.log('Button was clicked!')
    location.href = "./index.html"
})


// salman helped me with that!
let createDiv = ()=> {
    for (i=0; i < 360; i++) {
        const div = document.createElement("div")
        div.classList.add('cell')
        div.classList.add('cell-'+i)
        snakeBoard.append(div)
        console.log(div)
    }
}
createDiv()





//! <!-- CODE GRAVEYARD --> 

// console.log('Its working!');

//const playBtnEl = document.querySelector('.playBtn');
// console.log(playBtnEl);

// playBtnEl.addEventListener('click', () => {
// console.log('Button was clicked!')
// location.href = "./game.html"
// });