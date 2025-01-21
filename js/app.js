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

let snakeBody = [];
// console.log(snakeBody);

const cell183El = document.querySelector('.cell-183');
// creating the snake on the board
const createSnake = document.createElement("div");
// give the snake a (class="theSnake")
createSnake.classList.add('theSnake');
// put the snake inside the cell-183 div
snakeBody.push(createSnake);
cell183El.append(createSnake);
// console.log(snakeBody);

let celNum = 183; // current snake position
let currentDirection; // snake current direction
let movementInterval;
let score = 0;

const blinkingTestEl = document.querySelector('.blinkText');

document.addEventListener('keydown', (e) => {
// Check if the key pressed is the same as the current direction
    if (
        (e.key === "ArrowUp" && currentDirection === "up") ||
        (e.key === "ArrowDown" && currentDirection === "down") ||
        (e.key === "ArrowLeft" && currentDirection === "left") ||
        (e.key === "ArrowRight" && currentDirection === "right")
    ) {
        // Exit the function if the same key is pressed
        return;
    }

    if (e.key === "ArrowUp") {
        currentDirection = "up", blinkingTestEl.remove();
    } else if (e.key === "ArrowDown") {
        currentDirection = "down", blinkingTestEl.remove();
    } else if (e.key === "ArrowLeft") {
        currentDirection = "left", blinkingTestEl.remove();
    } else if (e.key === "ArrowRight") {
        currentDirection = "right", blinkingTestEl.remove(); 
    } 
    // snake will move if a key is pressed
    clearInterval(movementInterval);
    
    // will clear the old unknown movement interval to set it fresh.
    movementInterval = setInterval(() => {
        // const currentCell = document.querySelector(`.cell-${celNum}`);
        document.querySelector(`.cell-${celNum}`);
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
        
        let totalCells = 360

        // Check if the snake is outside the (top & bottom) grid boundaries (dead)
        if (celNum < 0 || celNum >= 360) {
            clearInterval(movementInterval);
            alert("Game Over! You hit the wall!");
            score = 0;
            scoreNum.innerHTML = score;
            // randomize the snakes repawn point.
            celNum = Math.floor(Math.random() * totalCells);
            return;
        }
    
    // Check if the snake is outside the (right) grid boundaries (dead)
    if (currentDirection === "right") {
        if (celNum === 0 || celNum === 20 || celNum === 40 || celNum === 60 || celNum === 80 || celNum === 100 || celNum === 120 || celNum === 140 || celNum === 160 || celNum === 180 || celNum === 200 || celNum === 220 || celNum === 240 || celNum === 260 || celNum === 280 || celNum === 300 || celNum === 320 || celNum === 340 || celNum === 360) {
            clearInterval(movementInterval);
            alert("Game Over! You hit the wall!");
            score = 0;
            scoreNum.innerHTML = score;
            celNum = Math.floor(Math.random() * totalCells);
            return;
        }
    }

    // Check if the snake is outside the (left) grid boundaries (dead)
    if (currentDirection === "left") {
        if (
            celNum === 19 || celNum === 39 || celNum === 59 || celNum === 79 || 
            celNum === 99 || celNum === 119 || celNum === 139 || celNum === 159 || 
            celNum === 179 || celNum === 199 || celNum === 219 || celNum === 239 || 
            celNum === 259 || celNum === 279 || celNum === 299 || celNum === 319 || 
            celNum === 339 || celNum === 359 || celNum === 360
        ) {
            clearInterval(movementInterval);
            alert("Game Over! You hit the wall!");
            score = 0;
            scoreNum.innerHTML = score;
            celNum = Math.floor(Math.random() * totalCells);
            return;
        }
    }
        const newCell = document.querySelector(`.cell-${celNum}`);
        // newCell.appendChild(createSnake);
        newCell.append(createSnake);

        if (celNum === foodNum) {
            // console.log('num', num++)
            // console.log('Hadi')
            document.querySelector(`.cell-${foodNum}`);
            food.remove()
            foodNum = Math.floor(Math.random() * totalCells);
            const newCell = document.querySelector(`.cell-${foodNum}`);
            newCell.append(food);
            score++;
            scoreNum.innerHTML = score;

            const createSnakeSegment = document.createElement("div");
            createSnakeSegment.classList.add('theSnake');
            document.querySelector(`.cell-${celNum}`).append(createSnake);
            console.log(snakeBody);
        }
    }, 75); 
});

const cell253El = document.querySelector('.cell-253');
let foodNum = 253;
let scoreNum = document.querySelector('#score');

const food = document.createElement("div");
        food.classList.add('snakeFood');
        // console.log(food);
        cell253El.append(food);


// snake current cell -1
  
 
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

//////////////////////////

//code to creating stuff from js to HTML - creating a div example
// const div = document.createElement("div");
//         div.classList.add('cell');

