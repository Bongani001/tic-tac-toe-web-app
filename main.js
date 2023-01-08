const gameBoard = (() => {

    //function for creating a marker for each player
    const playerFormation = (mark) => { 
        return mark;
    };
    
    // Create player 1 and player 2
    const player1 = playerFormation('X'); 
    const player2 = playerFormation('O');

    // Create combinations to match who is the winner
    const possibleCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8],
    ];

    // An array to be used to match who is the winner
    let boardArr = [];

    return { 
        boardArr,
        player1,
        player2,
        possibleCombinations
    };
})();

let markerGrid = document.querySelectorAll('.marker-grid');
let i = 0;
let currentPlayer = gameBoard.player1;
let see = '';
let winnerAnnouncement = document.querySelector('.winner-announcement');


// Display markers on the display onclick
markerGrid.forEach(marker => {
    marker.dataset.markerNum = i;
    gameBoard.boardArr.push(marker);
    marker.addEventListener('click', (e) => {
        //e.disabled = true;
        //marker.textContent = currentPlayer;
        // Change between players
        if (winnerAnnouncement.textContent === ('Player 1 is the winner' || 'Player 2 is the winner')){
            return;
        } else if (currentPlayer === gameBoard.player1 && marker.textContent === '') {
            marker.textContent = currentPlayer;
            currentPlayer = gameBoard.player2;
            see += marker.textContent;
            // Show current playing player
            playing1.textContent = '';
            playing2.textContent = 'Player 2';
        } else if (currentPlayer === gameBoard.player2 && marker.textContent === '') {
            marker.textContent = currentPlayer;
            currentPlayer = gameBoard.player1;
            see += marker.textContent;
            // Show current playing player
            playing2.textContent = '';
            playing1.textContent = 'Player 1';
        } else {
            return;
        };
        gameBoard.boardArr[marker.dataset.markerNum] = marker.textContent;
        console.log(gameBoard.boardArr);

        // Check if it's a tie
        if (see.length == 9) {
            winnerAnnouncement.textContent = 'It\'s a tie!';
            restartGame.style.display= 'block';
            playing1.textContent = '';
            playing2.textContent = '';
        };
        
        // Check for the winner
        gameBoard.possibleCombinations.forEach(combinations => {
            let first = combinations[0];
            let second = combinations[1];
            let third = combinations[2];
            
            
            if (gameBoard.boardArr[first]=== gameBoard.player1) {
                if (gameBoard.boardArr[second] === gameBoard.player1) {
                    if (gameBoard.boardArr[third] === gameBoard.player1) {
                        winnerAnnouncement.textContent = 'Player 1 is the winner';
                        playing2.textContent = '';
                        restartGame.style.display= 'block';
                    };
                };
            } else if (gameBoard.boardArr[first]=== gameBoard.player2) {
                if (gameBoard.boardArr[second] === gameBoard.player2) {
                    if (gameBoard.boardArr[third] === gameBoard.player2) {
                        winnerAnnouncement.textContent = 'Player 2 is the winner';
                        playing1.textContent = '';
                        restartGame.style.display= 'block';
                    };
                };
            } else {
                return;
            };
        });
    });
    i++;
});

let restartGame = document.querySelector('.restart');


restartGame.addEventListener('click', () => {
    markerGrid.forEach(marker => {
        see = '';
        marker.textContent = '';
        gameBoard.boardArr = [];
        winnerAnnouncement.textContent = '';
        currentPlayer = gameBoard.player1;
    });
    restartGame.style.display = 'none';
});

let playing1 = document.querySelector('.playing1');
let playing2 = document.querySelector('.playing2');
