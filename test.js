var percent = 0;
var mark = 0;
function resultTest(){
	 mark = mark + 1;
	 percent = percent + 20;
}
 function inpAnswer(){
  var qwOne = ($(":radio"));
     if (qwOne.eq(0).prop("checked") == true){
	 resultTest();
  }
   var qwTwo = ($(":radio"));
     if (qwTwo.eq(6).prop("checked") == true){
	 resultTest();
}
   var qwThree = ($(":radio"));
     if (qwThree.eq(11).prop("checked") == true){
	 resultTest();
} 
 var qwFour = ($(":checkbox"));
     if (qwFour.eq(0).prop("checked") == false && qwFour.eq(1).prop("checked") == true && qwFour.eq(2).prop("checked") == false && qwFour.eq(3).prop("checked") == true){
	 resultTest();
}
	 var qwFive = ($(":checkbox"));
	 
 if (qwFive.eq(4).prop("checked") == true && qwFive.eq(5).prop("checked") == true && qwFive.eq(6).prop("checked") == false && qwFive.eq(7).prop("checked") == false){
	 resultTest();
}
	alert("Ваш результат"+ " "+ mark + " баллов" + "," + " " + percent + " %" );
	percent = 0;
    mark = 0;
}
 
 $(":button").eq(0).bind("click", function(){
	   inpAnswer();
		})
