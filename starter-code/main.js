var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
//if (cardTwo === cardFour) {
  //alert('You found a match!');
  //}
//else {
  //alert('Sorry, try again.');
  //}
var gameBoard = document.getElementById('game-board');
function createBoard() {
  for (var i = 0; i < gameBoard.length; i ++) {
    var makeCard = document.createElement('div');
    makeCard.className = 'card';
    gameBoard.appendChild(makeCard);
  }
}