const logoReturnToMainMenuEl =  document.querySelector('#navGameIcon');
// console.log(logoReturnToMainMenuEl);

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



//! <!-- CODE GRAVEYARD --> 

// console.log('Its working!');

//const playBtnEl = document.querySelector('.playBtn');
// console.log(playBtnEl);

// playBtnEl.addEventListener('click', () => {
// console.log('Button was clicked!')
// location.href = "./game.html"
// });