const logoReturnToMainMenuEl = document.querySelector('#navGameIcon');
// console.log(logoReturnToMainMenuEl);
const snakeBoard = document.querySelector('#game-board');

//NavLogo to MainMenu Audio
function playBGMusic() {
    let audio = new Audio("../Audio/Menu.mp3");
    audio.play();
}

function playAgnBtnSE() {
    let audio = new Audio("../Audio/PlayBtnSE.mp3");
        audio.play();
}

logoReturnToMainMenuEl.addEventListener('click', () => {
    // console.log('Button was clicked!')
    playBGMusic();
    setTimeout(() => {
    location.href = "./index.html";
    }, 450);
});

const textReturnToMainMenuEl = document.querySelector('#navGameText');
// console.log(textReturnToMainMenuEl);

textReturnToMainMenuEl.addEventListener('click', () => {
    // console.log('Button was clicked!')
    location.href = "./index.html";
});

// Snakes Death Modal
const gameOverModalEl = document.querySelector('#gameOverModal');
const playAgainBtn = document.querySelector('#playAgainBtn');

const gameOverModal = new bootstrap.Modal(gameOverModalEl);

// showing modal function when snake dies + minecraft sound.
function gameOver() {
    let audio = new Audio("../Audio/snakeDeath.mp3");
    audio.play();
    gameOverModal.show();
    playAgainBtn.addEventListener('click', () => {
        playAgnBtnSE();
        setTimeout(() => {
        location.href = "./index.html";
        }, 1800);
});  
};

function snakeEatFoodSE() {
    let audio = new Audio("../Audio/snakeMunch.mp3");
    audio.play();
}

// playBtn.addEventListener('click', () => {
//     // console.log('Button was clicked!')
//     playBtnSE();
//     setTimeout(() => {
//     }, 450);
// });

//! CREATING THE GRID:
/////////////////////////////////////

//creating cells on the grid
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

let celNum = 183; // current snake's head position
let currentDirection; // snake current direction
let movementInterval; // setting interval for a function then, using it to clear the function interval.
let score = 0; // starting player score from 0.
let snakeBody = []; // Holds all the snake segments
let totalCells = 360 // total grid cells from 0 - 360 horizontally
let foodNum = 253; // food starting position then Math.random
let scoreNum = document.querySelector('#score');


//! CREATING THE SNAKE HEAD:
/////////////////////////////////////

const cell183El = document.querySelector('.cell-183'); // Initial cell for the snake head
const createSnake = document.createElement("div"); // Create the snake head
createSnake.classList.add('theSnake'); // Add a class for styling
snakeBody.push({ element: createSnake, position: 183 }); // Add the head to the snake body
cell183El.append(createSnake); // Place the head on the board
// console.log(snakeBody);

const blinkingTestEl = document.querySelector('.blinkText');

// SNAKES FOOD INITIAL POSITION
const cell253El = document.querySelector('.cell-253');

//! CREATING THE SNAKE FOOD:
/////////////////////////////////////

const food = document.createElement("div");
food.classList.add('snakeFood');
// console.log(food);
cell253El.append(food);


//! CREATING THE SNAKE HEAD MOVEMNT:
/////////////////////////////////////

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
    // will clear the old unknown movement interval to set it fresh.
    clearInterval(movementInterval);
        
    movementInterval = setInterval(() => {
        // Calculate new positions for all snake segments
        for (let i = snakeBody.length - 1; i > 0; i--) {
            snakeBody[i].position = snakeBody[i - 1].position; // Each segment follows the previous one
        }
        
        if (currentDirection === "up") {
            celNum -= 20;

            //! CREATING THE TOP BOUNDARIES:
            // Check if the snake hits the top boundary (dies)
            if (celNum < 0) {
            clearInterval(movementInterval);
            gameOver();
            score = 0;
            scoreNum.innerHTML = score;
    }
        } else if (currentDirection === "down") {
            celNum += 20;

            //! CREATING THE BOTTOM BOUNDARIES:
            // Check if the snake hits the bottom boundary (dies)
            if (celNum >= 360) {
            clearInterval(movementInterval);
            gameOver();
            score = 0;
            scoreNum.innerHTML = score;
    }
        } else if (currentDirection === "left") {
            celNum -= 1;
        } else if (currentDirection === "right") {
            celNum += 1;
        }
        
        // Update the head position
        snakeBody[0].position = celNum;

        // Check if the snake collides with itself
        for (let i = 1; i < snakeBody.length; i++) {
        if (snakeBody[0].position === snakeBody[i].position) {
        clearInterval(movementInterval);
        alert("Game Over! You hit yourself!");
        score = 0;
        scoreNum.innerHTML = score;
        celNum = Math.floor(Math.random() * totalCells);
        }
    }

        // Clear old snake position
        document.querySelectorAll('.theSnake, .theSnakeSegment').forEach(segment => segment.remove());
    
        // Re-add the snake
        snakeBody.forEach(segment => {
            const cell = document.querySelector(`.cell-${segment.position}`);
            cell.append(segment.element);
        });
    


//! CREATING THE RIGHT & LEFT BOUNDARIES:
// /////////////////////////////////////

    
        // Check if the snake is outside the (right) grid boundaries (dies)
        if (currentDirection === "right") {
            if (celNum === 0 || celNum === 20 || celNum === 40 || celNum === 60 || celNum === 80 || celNum === 100 || celNum === 120 || celNum === 140 || celNum === 160 || celNum === 180 || celNum === 200 || celNum === 220 || celNum === 240 || celNum === 260 || celNum === 280 || celNum === 300 || celNum === 320 || celNum === 340 || celNum === 360) {
                clearInterval(movementInterval);
                gameOver();
                score = 0;
                scoreNum.innerHTML = score;
                celNum = Math.floor(Math.random() * totalCells);
                return;
            }
        }

        // Check if the snake is outside the (left) grid boundaries (dies)
        if (currentDirection === "left") {
            if (
                celNum === 19 || celNum === 39 || celNum === 59 || celNum === 79 || 
                celNum === 99 || celNum === 119 || celNum === 139 || celNum === 159 || 
                celNum === 179 || celNum === 199 || celNum === 219 || celNum === 239 || 
                celNum === 259 || celNum === 279 || celNum === 299 || celNum === 319 || 
                celNum === 339 || celNum === 359 || celNum === 360
            ) {
                clearInterval(movementInterval);
                gameOver();
                score = 0;
                scoreNum.innerHTML = score;
                celNum = Math.floor(Math.random() * totalCells);
                return;
            }
        }
        

        //APPENDING THE SNAKE HERE
        const newCell = document.querySelector(`.cell-${celNum}`);
        // newCell.appendChild(createSnake);
        newCell.append(createSnake);

//! SNAKE FOOD PROCEDURE & RANDOMIZER + CREATING NEW SEGMENT TO THE SNAKE-BODY:
// // ////////////////////////////////////////////////////////////

        if (celNum === foodNum) {
            // console.log('num', num++)
            // console.log('Hadi')
            // check if next line of code needed for testing.
            // document.querySelector(`.cell-${foodNum}`);
            food.remove()
            foodNum = Math.floor(Math.random() * totalCells);
            const newCell = document.querySelector(`.cell-${foodNum}`);
            newCell.append(food);
            score++;
            scoreNum.innerHTML = score;
            snakeEatFoodSE()
            // console.log('Food Eaten!')

            // Add a new segment to the snakeBody.
            const createSnakeSegment = document.createElement("div");
             createSnakeSegment.classList.add('theSnakeSegment');
             
             //ext
             const lastSegmentPosition = snakeBody[snakeBody.length - 1].position;
             snakeBody.push({ element: createSnakeSegment, position: lastSegmentPosition });
             console.log(snakeBody);
        }
    }, 150); //MovmentInterval Ends Here.
});  //Keydown EventListener Ends Here.
