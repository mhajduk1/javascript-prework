function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
  console.log('wywołałem funkcję print message');
}
function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
