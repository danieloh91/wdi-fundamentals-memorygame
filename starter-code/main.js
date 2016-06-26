var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var gameBoard = document.getElementById('game-board');
function createBoard() {
  for (var i=0; i<cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.setAttribute('data-card', cards[i]);
    cardElement.addEventListener('click', isTwoCards);
    gameBoard.appendChild(cardElement);
    gameBoard.appendChild(cardElement);
  }
}
function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = '<img src="Hearts 13.png" alt="King of Hearts" />';
	} else {
		this.innerHTML = '<img src="Hearts 12.png" alt="Queen of Hearts" />';
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}
function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}
createBoard();
