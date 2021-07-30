let game = document.getElementById("myCanvas");
let ctx = game.getContext("2d");
const lengthSnake = 4;
let snake;
let quarry;
let dx;
let dy;
let score;
let level;
let time;
let cr = 'rgb(' +
    Math.floor(Math.random() * 256) + ',' +
    Math.floor(Math.random() * 256) + ',' +
    Math.floor(Math.random() * 256) + ')';

function stop() {
    alert("Pause");
}

function star() {
    level = document.getElementById("level").value;
    if (level === "1") {
        time = 200;
        document.getElementById("level").style.color = "green";
    } else if (level === "2") {
        time = 100;
        document.getElementById("level").style.color = "yellow";
    } else if (level === "3") {
        time = 50;
        document.getElementById("level").style.color = "red";
    } else {
        return alert("Select Level");
    }
    snake = [];
    quarry = new Quarry();
    dx = 10;
    dy = 0;
    score = 0;
    newSnake();
    main();
    window.addEventListener('keydown', changeDirection);
}

function newSnake() {
    for (let i = 0; i < lengthSnake; i++) {
        snake[i] = new Snake(10 + 10 * i, 50, 10, 10);
    }
}

function showScore() {
    document.getElementById("score").innerHTML = "Score: " + score;
}

function newQuarry() {
    while (quarrySnake()) {
        quarry = new Quarry();
        score++;
    }
}

function quarrySnake() {
    for (let i = 0; i < snake.length; i++) {
        if (quarry.x === snake[snake.length - 1].x && quarry.y === snake[snake.length - 1].y) {
            cr = 'rgb(' +
                Math.floor(Math.random() * 256) + ',' +
                Math.floor(Math.random() * 256) + ',' +
                Math.floor(Math.random() * 256) + ')';
            return true;
        }

    }
    return false;
}

function checkQuarry() {
    if (snake[snake.length - 1].x === quarry.x && snake[snake.length - 1].y === quarry.y) {
        newQuarry();
    }
}

function drawSnake() {
    for (let i = 0; i < snake.length; i++) {
        snake[i].drawSnake(ctx);
    }
}

function newHead() {
    let newHead = new Snake(snake[snake.length - 1].x + dx, snake[snake.length - 1].y + dy, 10, 10);
    snake.push(newHead);
    if (snake[snake.length - 1].x !== quarry.x || snake[snake.length - 1].y !== quarry.y) {
        snake.shift();
    }
}

function clearCanvas() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, game.width, game.height);
}

function checkGameOver() {
    let checkLeft = snake[snake.length - 1].x < 0;
    let checkRight = snake[snake.length - 1].x > game.clientWidth;
    let checkTop = snake[snake.length - 1].y < 0;
    let checkBot = snake[snake.length - 1].y >= game.clientHeight;
    let checkSnake;
    for (let i = 0; i < snake.length - 1; i++) {
        if (snake[snake.length - 1].x === snake[i].x && snake[snake.length - 1].y === snake[i].y) {
            checkSnake = true;
        }
    }
    return (checkSnake || checkLeft || checkRight || checkTop || checkBot);
}

function main() {
    function autoMove() {
        if (checkGameOver()) {
            return alert("Game Over!");
        }
        clearCanvas();
        showScore();
        quarry.drawQuarry(ctx);
        drawSnake();
        checkQuarry();
        newHead();
        window.requestAnimationFrame(main);
    }

    setTimeout(autoMove, time);
}

function changeDirection(evt) {
    switch (evt.keyCode) {
        case 37:
            if (dx !== 10) {
                dx = -10;
                dy = 0;
            }
            break;
        case 39:
            if (dx !== -10) {
                dx = 10;
                dy = 0;
            }
            break;
        case 38:
            if (dy !== 10) {
                dx = 0;
                dy = -10;
            }
            break;
        case 40:
            if (dy !== -10) {
                dx = 0;
                dy = 10;
            }
            break;
    }
}


