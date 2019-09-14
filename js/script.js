let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);
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
/*if(playerInput == '1'){
  playerMove = 'kamień';
}else if (playerInput  == '2') {
	playerMove = 'papier';
}else if (playerInput == '3') {
	playerMove = 'nożyce';
}*/
//ruch komputera
/*if(randomNumber == 1){
  computerMove = 'kamień';
  printMessage('Mój ruch to: ' + computerMove);
}else if(randomNumber == 2){
  computerMove = 'papier';
  printMessage('Mój ruch to: ' + computerMove);
}else if(randomNumber == 3){
  computerMove = 'nożyce';
  printMessage('Mój ruch to: ' + computerMove);
}
*/
//warunki wygranych
function displayResult(argComputerMove, argPlayerMove) {
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
      }
if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
}else if( computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
}else if( computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
}else if (computerMove == playerMove) {
	printMessage('Remis!');
}else if( playerMove == 'kamień' && computerMove == 'papier'){
  printMessage('Komputer wygrywa!');
}else if( playerMove == 'papier' && computerMove == 'nożyce'){
  printMessage('Komputer wygrywa!');
}else if( playerMove == 'nożyce' && computerMove == 'kamień'){
  printMessage('Komputer wygrywa!');
}
