const gameBoard = (() => {

    //function for creating a marker for each player
    const playerFormation = (mark) => { 
        return mark;
    };
    
    // Create player 1 and player 2
    const player1 = playerFormation('X'); 
    const player2 = playerFormation('O');; 

    // Create combinations to match who is the winner
    const possibleCombinations = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [7,4,1],
        [8,5,2],
        [9,6,3],
        [7,5,3],
        [9,5,1],
    ]

    // An array to be used to match who is the winner
    let boardArr = [];

    console.log(boardArr);
//    return { 
//    player1: player1,
//    player2: player2
//    };

    let markerGrid = document.querySelectorAll('.marker-grid');
    let i = 0;

    markerGrid.forEach(marker => {

        marker.dataset.markerNum = i;
        boardArr.push(marker);
        marker.addEventListener('click', () => {
            marker.textContent = 'x';
            boardArr[marker.dataset.markerNum] = marker.textContent;
            console.log(boardArr);
        });
        i++;
   });


})();