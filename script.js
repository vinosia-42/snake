const grid = document.getElementById('grid');
const scoreDisplay = document.getElementById('score');
let squares = [];
let currentSnake = [2, 1, 0];
let direction = 1;
let appleIndex = 0;
let score = 0;
let timerId = 0;
let intervalTime = 200;
function createBoard() {
    for (let i = 0; i < 400; i++) {
    let square = document.createElement('div');
    grid.appendChild(square);
    squares.push(square);
    }
}
createBoard();
startgame();
generateApple();

function startgame() {
    currentSnake.forEach(index => squares[index].classList.remove('snake'));
    squares[appleIndex].classList.remove('apple');
    clearInterval(timerId);
}
function move() {
    const hitbottom = (currentSnake[0] + 20 >= 400 && direction === 20);
    const hittop = (currentSnake[0] - 20 < 0 && direction === -20);
    const hitright = (currentSnake[0] % 20 === 19 && direction === 1);
    const hitleft = (currentSnake[0] % 20 === 0 && direction === -1);
    const hitself = squares[currentSnake[0] + direction]?.classList.contains('snake');
}

function generateApple() {
    do {
        appleIndex = Math.floor(Math.random() * squares.length);
    } while (squares[appleIndex].classList.contains('snake'));
    squares[appleIndex].classList.add('apple');
}

function changeDir(newDir) {
    if (direction + newDir !== 0) {
        direction = newDir;
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') changeDir(-20);
    if (e.key === 'ArrowDown') changeDir(20);
    if (e.key === 'ArrowLeft') changeDir(1);
    if (e.key === 'ArrowRight') changeDir(-1);
});

