// const gameboard = [];

// const player = ((name, x) => {  // Create a player
//     const getName = () => name;
//     const getPiece = () => x;
//     return getName, getPiece;
// })();

// const bob = player('boby', 'x');
// console.log(bob);


const gameBoard = (() => {

    const playerFormation = (marker) => { //function for player creation
        return marker;
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

   return { 
   player1: player1,
   player2: player2
   };
})();