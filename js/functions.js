function playGame(playerInput){
  //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  clearMessages();
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randomNumber);
  let playerMove = getMoveName(playerInput);


displayResult(computerMove ,playerMove);
}
function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}
function clearMessages(){
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
