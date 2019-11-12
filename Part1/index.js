let board = [];

function play(boxId){
    let playerSpan = document.getElementById('player');
    
    let clickedElement = document.getElementById(boxId);

    if (clickedElement.innerText !== '') {
        window.alert('That spot is already taken.');
        return;
    }
    
    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        board[boxId] = 'X';
    } else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[boxId] = 'O';
    }
    
    const topLeft = board[0];
    const topCenter = board[1];
    const topRight = board[2];
    const middleLeft = board[3];
    const middleCenter = board[4];
    const middleRight = board[5];
    const bottomLeft = board[6];
    const bottomCenter = board[7];
    const bottomRight = board[8];
    
    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight){
        window.alert(`${topLeft} is the winner!`);
        reset();
        gameOver();
        return;
    }
    
    if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight){
        window.alert(`${middleLeft} is the winner!`);
        reset();
        gameOver();
        return;
    }
    
    if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
        window.alert(`${bottomLeft} is the winner!`);
        reset();
        gameOver();
        return;
    }
    
    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
        window.alert(`${topLeft} is the winner!`);
        reset();
        gameOver();
        return;
    }
    
    if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter){
        window.alert(`${topCenter} is the winner!`);
        reset();
        gameOver();
        return;
    }
    
    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight){
        window.alert(`${topRight} is the winner!`);
        reset();
        gameOver();
        return;
    }
    
    if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight){
        window.alert(`${topLeft} is the winner!`);
        reset();
        gameOver();
        return;
    }
    
    if (topRight !== undefined && topRight === middleCenter && topRight === bottomLeft){
        window.alert(`${topRight} is the winner!`);
        reset();
        gameOver();
        return;
    }
    
    let boardFull = true;
    
    for (let i = 0; i < 9; i++){
        if (board[i] === undefined) {
            boardFull = false;
        }
    }
    if (boardFull === true) {
        window.alert("Cat's Game!");
        reset();
        return;
    }
}

function reset() {
    board = [];
    document.getElementById('player').innerText = 'X';
    for (let i = 0; i < 9; i++) {
        document.getElementById(`${i}`).innerText = '';
    }
}

function gameOver() {
    for (let i = 0; i < 9; i++) {
        document.getElementById(`${i}`).id = '';
    }
}