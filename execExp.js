function execExp(exp){
	
	var numArray = [];
	var operArray = [];
	var i=0, len = exp.length;
	
	var reg = /[\+\-\/x]/;
	numArray=exp.split(reg);
	
	for(i in exp){
		if(reg.test(exp.charAt(i))){
			operArray.push(exp.charAt(i));	
			
		}
	}
	
	
	if(numArray.length < operArray.length){
		return "Not enough operands";
	}
	
	var result = parseFloat(numArray[0]);

	var j=0
	for(i=1; i < numArray.length; i++){
		var num = parseFloat(numArray[i]);
	//	console.log("num: "+ num + "oper: " + operArray[j]);
		switch (operArray[j]){
			case '+': 
				result = (result + num); 
				break;
			case '-': 
				result = (result - num); break;
			case 'x': 
				result = (result * num); break;
			case '/': 
				result = (result / num); break;
		}
		j++;
		
	}
	return result;
}

var res = execExp("5+21-8+2/10");
console.log(res);
