function outerFuntion(arg){
	var variableInOuterFuntion = arg;
	return function(){
		console.log(variableInOuterFuntion);
		document.getElementById('txtInput').value = variableInOuterFuntion;
	}

}

var innerFountion = outerFuntion('Hello Closure!'); //can pas in a getElementByID.valueOF

innerFountion();
