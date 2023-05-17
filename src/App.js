let isDrawingEnabled = true; // Variable to track the drawing state
let selectColor = "#000"; // Default color for drawing

window.addEventListener('DOMContentLoaded', () => {
    createBoard(16);
    // Create a new board
    let selectSize = document.getElementById('sel');
    selectSize.addEventListener('click', function (e) {
        let size = getSize();
        createBoard(size);
    });

    // reset  board
    let resetBtn = document.getElementById('reset');
    resetBtn.addEventListener('click', function () {
        resetBoard();
    });

    // toggle random color
    let randColorBtn = document.getElementById('rand-color');
    randColorBtn.addEventListener('click', function () {
        generateRandomColor();
    });

    //pause drawing
    let pauseBtn = document.getElementById('pause');
    pauseBtn.addEventListener('click', function () {
        pauseDrawing();
    });

    // resume drawing
    let resumeBtn = document.getElementById('resume');
    resumeBtn.addEventListener('click', function () {
        resumeDrawing();
    });

    //black drawing 
    let blackBtn = document.getElementById('black');
    blackBtn.addEventListener('click', function () {
        selectColor = "#000";
    });


});

// To create a new board
function createBoard(size) {
    const board = document.getElementById('board');
    board.innerHTML = ''; // Clear the board before creating a new one

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let div = document.createElement("div");

            div.addEventListener("mouseover", function () {
                if (isDrawingEnabled) {
                    div.style.backgroundColor = selectColor;
                }
            });

            board.appendChild(div);
        }
    }
}

// Getting size of board
function getSize() {
    let userInput = prompt("Enter your board size");
    let message = document.getElementById("message");

    if (userInput === "") {
        message.textContent = "Please enter a number";
    } else if (userInput < 0 || userInput > 100) {
        message.textContent = "Please enter a number between 0 and 100";
    } else {
        message.textContent = "Your board size is: " + userInput + "x" + userInput;
        return userInput;
    }
}

// Reset the board
function resetBoard() {
    const board = document.getElementById('board');
    const divs = board.querySelectorAll('div');
    divs.forEach((div) => {
        div.style.backgroundColor = '';
    });
    clearInterval(intervalId); // Clear the animation interval
}

// Generate a random color
function generateRandomColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    selectColor = randomColor;
}
// Pause drawing
function pauseDrawing() {
    isDrawingEnabled = false;
    let pauseBtn = document.getElementById("pause");
    let resumeBtn = document.getElementById("resume");
    pauseBtn.style.backgroundColor = "red";
    resumeBtn.style.backgroundColor = "";
}

// Resume drawing
function resumeDrawing() {
    isDrawingEnabled = true;
    let pauseBtn = document.getElementById("pause");
    let resumeBtn = document.getElementById("resume");
    pauseBtn.style.backgroundColor = "";
    resumeBtn.style.backgroundColor = "green";
}