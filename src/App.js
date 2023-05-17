window.addEventListener('DOMContentLoaded', () => {
    createBoard();
    getSize();
});


// to create a new board
function createBoard(size) {
    const board = document.getElementById('board');

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDiv = size * size;

    for (let i = 0; i < numDiv; i++) {

        let div = document.createElement("div");
        div.style.backgroundColor = "yellow";
        board.insertAdjacentElement("beforeend", div);
    }
}

// getting size of board 
function getSize() {
    let userInput = prompt("Enter your board size ");
    let message = document.getElementById("message");

    if (userInput == "") {
        message.innerHTML = "Please enter a number";
    }
    else if (userInput < 0 || userInput > 100) {
        message.innerHTML = "Please enter a number between 0 and 100";
    }
    else {
        message.innerHTML = "Your board size is: " + userInput + "x" + userInput;
    }
}
