function foo(){
	msg = '5000 milliseconds have passed since this demo started'

	console.log(msg);
	document.getElementById('txtInput').value = msg;
}
setTimeout(foo, 5000);
