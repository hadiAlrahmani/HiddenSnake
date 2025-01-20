const logoReturnToMainMenuEl = document.querySelector('#navGameIcon');
// console.log(logoReturnToMainMenuEl);
const snakeBoard = document.querySelector('#game-board');

logoReturnToMainMenuEl.addEventListener('click', () => {
    // console.log('Button was clicked!')
    location.href = "./index.html";
});

const textReturnToMainMenuEl = document.querySelector('#navGameText');
// console.log(textReturnToMainMenuEl);

textReturnToMainMenuEl.addEventListener('click', () => {
    // console.log('Button was clicked!')
    location.href = "./index.html";
});


// salman helped me with that!
let createDiv = () => {
    for (i = 0; i < 360; i++) {
        const div = document.createElement("div");
        div.classList.add('cell');
        div.classList.add('cell-' + i);
        snakeBoard.append(div);
        // console.log(div);
    }
};
createDiv();

const cell183El = document.querySelector('.cell-183');

// creating the snake on the board
const createSnake = document.createElement("div");
// give the snake a (class="theSnake")
createSnake.classList.add('theSnake');
// put the snake inside the cell-183 div
cell183El.append(createSnake);

let celNum = 183; // current snake position
let currentDirection; // snake current direction
let movementInterval;

document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowUp") {
        currentDirection = "up";
    } else if (e.key === "ArrowDown") {
        currentDirection = "down";
    } else if (e.key === "ArrowLeft") {
        currentDirection = "left";
    } else if (e.key === "ArrowRight") {
        currentDirection = "right"; 
    } 
    // snake will move if a key is pressed
    clearInterval(movementInterval);
    
    // will clear the unknown movement interval to set it fresh.
    movementInterval = setInterval(() => {
        const currentCell = document.querySelector(`.cell-${celNum}`);
        // currentCell.removeChild(createSnake);
        createSnake.remove();
        if (currentDirection === "up") {
            celNum -= 20;
        } else if (currentDirection === "down") {
            celNum += 20;
        } else if (currentDirection === "left") {
            celNum -= 1;
        } else if (currentDirection === "right") {
            celNum += 1;
        }
        const newCell = document.querySelector(`.cell-${celNum}`);
        // newCell.appendChild(createSnake);
        newCell.append(createSnake);
    }, 50);

    
});


// ! <!-- CODE GRAVEYARD --> 

// console.log('Its working!');

// const playBtnEl = document.querySelector('.playBtn');
// console.log(playBtnEl);

// playBtnEl.addEventListener('click', () => {
// console.log('Button was clicked!')
// location.href = "./game.html"
// });

////////////////////////////////
// //selecting (thesnake) div - using 'let' cuz snake gonna move around using arrow keys.
// let snake = document.querySelector('theSnake');
// // how many px the snake head will move each time arrow key is pressed.
// // const modifier = 25;
// //loading the snake in that position
// window.addEventListener('load', () => {
//     snake.style.position = 'abolute';
//     snake.style.left = 0;
//     snake.style.top = 0;
// })
////////////////

// for (i=0; i < 100; i++){
//     setInterval(() => { 
//         console.log(celNum)
//         createSnake.remove(document.querySelector(`cell-${celNum}`))
//         celNum = celNum + 1 
//         // or celNum++
//         document.querySelector(`.cell-${celNum}`).append(createSnake);
//     }, 1000)
// } 

////////////////

// console.log(createSnake);
// console.log(celNum)

// /* this code makes snake move to the right per click */
// else if (e.key === "ArrowRight") {
//     createSnake.remove(document.querySelector(`cell-${celNum}`))
//     celNum = celNum + 1
//     document.querySelector(`.cell-${celNum}`).append(createSnake);
// }

////////////////

// const cell184El = document.querySelector('.cell-184');

// crazy movement

// let celNum = 183

// document.addEventListener('keydown', (e) => {
//     console.log('key is pressed.')
//     if (e.key === "ArrowUp") {
//         const snakeRDirection = () => {
//             createSnake.remove(document.querySelector(`cell-${celNum}`))
//             celNum = celNum - 20
//             document.querySelector(`.cell-${celNum}`).append(createSnake);
//         }
//         setInterval(snakeRDirection, 200);
//     } 
//     else if (e.key === "ArrowDown") {
//         const snakeRDirection = () => {
//             createSnake.remove(document.querySelector(`cell-${celNum}`))
//             celNum = celNum + 20
//             document.querySelector(`.cell-${celNum}`).append(createSnake);
//         }
//         setInterval(snakeRDirection, 200);
//     } 
//     else if (e.key === "ArrowLeft") {
//         const snakeRDirection = () => {
//             createSnake.remove(document.querySelector(`cell-${celNum}`))
//             celNum = celNum - 1
//             document.querySelector(`.cell-${celNum}`).append(createSnake);
//         }
//         setInterval(snakeRDirection, 200);
//     } 
//     else if (e.key === "ArrowRight") {
//         const snakeRDirection = () => {
//             createSnake.remove(document.querySelector(`cell-${celNum}`))
//             celNum = celNum + 1
//             document.querySelector(`.cell-${celNum}`).append(createSnake);
//         }
//         setInterval(snakeRDirection, 200);
//     }
// });

////////////////

// console.log(createSnake);

// let snakePosition = 183;
// let snakeMovements = () => {
//     for (i=0; i < 16; i++) {
//         const cell = document.querySelector(`.cell-${i}`)
//         cell.remove(createSnake)
//         createSnake.append(div)
//     } 
// }