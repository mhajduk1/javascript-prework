let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let playerMove = 'nieznany ruch';
let computerMove = 'nieznany ruch';
let randomNumber = Math.floor(Math.random() * 3 + 1);
if(playerInput == '1'){
  playerMove = 'kamień';
}else if (playerInput  == '2') {
	playerMove = 'papier';
}else if (playerInput == '3') {
	playerMove = 'nożyce';
}
printMessage('Twój ruch to: ' + playerMove);
if(randomNumber == 1){
  computerMove = 'kamień';
  printMessage('Mój ruch to: ' + computerMove);
}else if(randomNumber == 2){
  computerMove = 'papier';
  printMessage('Mój ruch to: ' + computerMove);
}else if(randomNumber == 3){
  computerMove = 'nożyce';
  printMessage('Mój ruch to: ' + computerMove);
}
if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
}else if( computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
}else if( computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
}else if (computerMove == playerMove) {
	printMessage('Remis!');
}else if (playerInput == 'none') {
	printMessage('Nie wykonałeś ruchu, automatycznie przegrywasz.');
}else if( playerMove == 'kamień' && computerMove == 'papier'){
  printMessage('Komputer wygrywa!');
}else if( playerMove == 'papier' && computerMove == 'nożyce'){
  printMessage('Komputer wygrywa!');
}else if( playerMove == 'nożyce' && computerMove == 'kamień'){
  printMessage('Komputer wygrywa!');
}
