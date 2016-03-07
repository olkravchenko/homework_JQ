var number = "";
var result = 0;
var sum = false;
var difference = false;
var multiplication = false;
var division = false;
var elemEnter = ($(":input").eq(0).val());
    
   function buttonPress(el){
	number = number + el;
	$(":input").eq(0).val(number);
	
 }
   $(":button").eq(0).bind("click", function(){
	   buttonPress("7");
		});
   $(":button").eq(1).bind("click", function(){
	   buttonPress("8");
		});
   $(":button").eq(2).bind("click", function(){
	   buttonPress("9");
		});
   $(":button").eq(5).bind("click", function(){
	   buttonPress("4");
		});
	$(":button").eq(6).bind("click", function(){
	   buttonPress("5");
		});
	$(":button").eq(7).bind("click", function(){
	   buttonPress("6");
		});
	 $(":button").eq(10).bind("click", function(){
	   buttonPress("1");
		});
     $(":button").eq(11).bind("click", function(){
	   buttonPress("2");
		});
	 $(":button").eq(12).bind("click", function(){
	   buttonPress("3");
		});
	 $(":button").eq(15).bind("click", function(){
	   buttonPress("0");
		});
	 $(":button").eq(16).bind("click", function(){
	   buttonPress(".");
		});

   
function mathOperationSumm(){ 
 if (sum == false){
      result = +number;
      number = "";
	  sum =true;
}
 sum =true;
}
function mathDifference(){
	 if (difference == false){  
      result = +number;
      number = "";
} 
	 difference = true; 
 
}

function mathMultiplication(){
	if (multiplication == false){
	result = +number;
	number = "";
}
  multiplication = true; 
 }
function mathDivision(){
	if (division == false){
	result = +number;
	number = "";
}
  division = true; 
 }

function equallyOper(){
	if (sum == true){	
	result = +number + result;
	$(":input").eq(0).val(result);
}
   if (difference == true){
	result = result - +number;
	$(":input").eq(0).val(result);
}
   if (multiplication == true){
	result = +number * result;
	$(":input").eq(0).val(result);
}
   if (division == true){
	result = result / +number ;
	$(":input").eq(0).val(result);
	if (number == 0){
	$(":input").eq(0).val( "Деление на ноль невозможно");
	}
	
   }
   sum = false;
   difference = false; 
   multiplication = false;
   division = false;
}
 
function buttonReset() {
	number = "";
	result = "";
	$(":input").eq(0).val( "");
} 
function signChange() {
	number = -1 * +number;
	$(":input").eq(0).val(number);
}

$(":button").eq(17).bind("click", function(){
	   mathOperationSumm();
});
$(":button").eq(14).bind("click", function(){
	   equallyOper();
});
$(":button").eq(3).bind("click", function(){
	   mathDivision();
});
$(":button").eq(8).bind("click", function(){
	   mathMultiplication();
});
$(":button").eq(13).bind("click", function(){
	   mathDifference();
});		
$(":button").eq(4).bind("click", function(){
	  buttonReset();
});	
$(":button").eq(9).bind("click", function(){
	 signChange();
});	


 
 
 
 
  