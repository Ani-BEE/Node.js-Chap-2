function outerFuntion(arg){
	var variableInOuterFuntion = arg;

	function bar(){
		console.log(variableInOuterFuntion);
	}

	bar();
	document.getElementById('variableInOuterFuntion').value = outerFuntion;
}

outerFuntion('Hello Closure!');
