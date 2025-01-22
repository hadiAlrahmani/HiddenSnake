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

//! CREATING THE GRID:
/////////////////////////////////////

// salman helped me with that!
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

//! CREATING THE SNAKE HEAD BOUNDARIES:
// /////////////////////////////////////

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
        
        //RESPAWNING THE SNAKE IF DIED
        const newCell = document.querySelector(`.cell-${celNum}`);
        // newCell.appendChild(createSnake);
        newCell.append(createSnake);

//! SNAKE FOOD PROCEDURE & RANDOMIZER:
// // /////////////////////////////////////

        if (celNum === foodNum) {
            // console.log('num', num++)
            // console.log('Hadi')
            // check if next line of code needed for testing.
            document.querySelector(`.cell-${foodNum}`);
            food.remove()
            foodNum = Math.floor(Math.random() * totalCells);
            const newCell = document.querySelector(`.cell-${foodNum}`);
            newCell.append(food);
            score++;
            scoreNum.innerHTML = score;
            // console.log('Food Eaten!')

            const createSnakeSegment = document.createElement("div");
             createSnakeSegment.classList.add('theSnakeSegment');

             snakeBody.push({element: createSnakeSegment, position: celNum+1});
             // console.log(snakeBody);
             //  const cell199El = document.querySelector('.cell-199');
             //  cell199El.append(createSnakeSegment);
             const newSegmentPosition = document.querySelector(`.cell-${celNum}`);
             newSegmentPosition.append(createSnakeSegment);
             //new snake segment = current snake head position + 1
             console.log(snakeBody);
        } 
    }, 75); 
    // Note: MovmentInterval Ends Here.
});
// Note: Keydown EventListener Ends Here.






// ! <!-- CODE GRAVEYARD --> 




//-------------- Constants -------------


//---------- Variables (state) ---------


//----- Cached Element References  -----


//-------------- Functions -------------


//----------- Event Listeners ----------


// console.log('Its working!');

// const playBtnEl = document.querySelector('.playBtn');
// console.log(playBtnEl);

// playBtnEl.addEventListener('click', () => {
//     console.log('Button was clicked!')
//     location.href = "./game.html"
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

//////////////////

//addingSnakeSegments
// 1. Creating a new snake segment
// 2. Getting the last segment of the snake
// 3. Determining the position for the new segment
// 4. Adding the new segment to the snake body
// 5. Placing the new segment on the grid

/////////////

// let foodNum = Math.floor(Math.random() * totalCells);

// if (snakeBody.some(segment => segment.position === foodNum)) {
//     while (snakeBody.some(segment => segment.position === foodNum)) {
//         foodNum = Math.floor(Math.random() * totalCells);
//     }
// } 

////////////

// Snake should be in an array. (Array store the snake segments positions.
// If snake eats food.. add new snake segment to the tail.
// When snake move. Update each segment position to follow the one in front of it.

////////////

// 1. Creating a new snake segment
// 2. Getting the last segment of the snake
// 3. Determining the position for the new segment
// 4. Adding the new segment to the snake body
// 5. Placing the new segment on the grid

////////////

//////////

 
        // let snakeHead = snakeBody[0];
        // let snakeTail = snakeBody[snakeBody.length - 1];

        // // Move each segment of the snake body
        // for (let i = snakeBody.length - 1; i > 0; i--) {
        //     // Update each segment's position to the position of the segment in front of it
        //     snakeBody[i].position = snakeBody[i - 1].position;
        // }

        // // Add the new head to the snake body
        // snakeBody[0].position = celNum;

        // // Move the head to its new cell/position
        // const newHeadCell = document.querySelector(`.cell-${celNum}`);
        // newHeadCell.append(snakeBody[0].element);

        // // Update each segment's position
        // for (let i = 1; i < snakeBody.length; i++) {
        //     const segment = snakeBody[i];
        //     const segmentCell = document.querySelector(`.cell-${segment.position}`);
        //     segmentCell.append(segment.element);
        // }


        // const currentCell = document.querySelector(`.cell-${celNum}`);

        /////////

  // //addingSnakeSegments
            // const createSnakeSegment = document.createElement("div");
            // createSnakeSegment.classList.add('theSnake');
            // const lastSegment = snakeBody[snakeBody.length - 1];
            // let newSegmentPosition;
            // if (lastSegment) {
            //     newSegmentPosition = lastSegment.position;
            // } else {
            //     newSegmentPosition = celNum;
            // }

            // snakeBody.unshift({ element: createSnakeSegment, position: newSegmentPosition })
            // document.querySelector(`.cell-${celNum}`).append(createSnakeSegment);
            // console.log(snakeBody);
            ////////

