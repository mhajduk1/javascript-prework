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
			/*function displayResult(ComputerMove, playerMove) {
			        printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
			      }*/
