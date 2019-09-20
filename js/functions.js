function playGame(playerInput){
  clearMessages();
  let randomNumber = Math.floor(Math.random() * 3 + 1),
  computerMove = getMoveName(randomNumber);
  const playerMove = getMoveName(playerInput);
  displayResult(computerMove, playerMove);
}
function printMessage(msg){
	const div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}
const clearMessages = function(){
	document.getElementById('messages').innerHTML = '';
}
function getMoveName(moveNr) {
  if (moveNr == 1) {
      return 'kamień';
  } else if (moveNr == 2) {
      return 'papier';
  } else if (moveNr == 3) {
      return 'nożyce';
  } else {
      return 'Nie podałeś ruchu! Tak nie da się grać!';
  }
}
function displayResult(computerMove, playerMove) {
		printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
		if( computerMove == 'papier' && playerMove == 'kamień'){
			printMessage('Komputer wygrywa!');
		}else if( computerMove == 'papier' && playerMove == 'nożyce'){
		  printMessage('Ty wygrywasz!');
		}else if( computerMove == 'kamień' && playerMove == 'papier'){
		  printMessage('Ty wygrywasz!');
		}else if( computerMove == 'nożyce' && playerMove == 'kamień'){
		  printMessage('Ty wygrywasz!');
		}else if (computerMove == playerMove) {
			printMessage('Remis!');
		}else if( computerMove == 'nożyce' && playerMove == 'kamień'){
		  printMessage('Komputer wygrywa!');
		}else if( computerMove == 'nożyce' && playerMove == 'papier'){
		  printMessage('Komputer wygrywa!');
		}else if( computerMove == 'kamień' && playerMove == 'nożyce'){
		  printMessage('Komputer wygrywa!');
		}
}
