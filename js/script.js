//let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);
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
if( computerMove == 'kamień' && getMoveName == 'papier'){
  printMessage('Ty wygrywasz!');
}else if( computerMove == 'papier' && getMoveName == 'nożyce'){
  printMessage('Ty wygrywasz!');
}else if( computerMove == 'nożyce' && getMoveName == 'kamień'){
  printMessage('Ty wygrywasz!');
}else if (computerMove == getMoveName) {
	printMessage('Remis!');
}else if( getMoveName == 'kamień' && computerMove == 'papier'){
  printMessage('Komputer wygrywa!');
}else if( getMoveName == 'papier' && computerMove == 'nożyce'){
  printMessage('Komputer wygrywa!');
}else if( getMoveName == 'nożyce' && computerMove == 'kamień'){
  printMessage('Komputer wygrywa!');
}
