var foo = {
	bar: 123,
	bas: {
		bas1: 'his love',
		bas2: 345
	}
};

console.log(foo);


document.getElementById("txtInput").value = foo.bar;
document.getElementById("txtInput").value = foo.bas[0];
