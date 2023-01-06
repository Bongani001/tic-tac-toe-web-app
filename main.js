const gameBoard = (() => {

    const playerFormation = (mark) => { //function for player creation
        return mark;
    };

    const player1 = playerFormation('X'); // Create player 1
    const player2 = playerFormation('O');; // Create player 2

    let boardArr = [];

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