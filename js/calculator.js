
    var one = '1';
    var two = '2';
    var three = '3';
    var four = '4';
    var five = '5';
    var six = '6';
    var seven = '7';
    var eight = '8';
    var nine = '9';
    var zero = '0';
    var plus = '+';
    var minus = '-';
    var multiply = '*';
    var divide = '/';
    var decimal = '.';
	var openParen = "(";
	var closeParen = ")";
    function enter(whichButton,str){
	  
	  var expr = document.getElementById("expr");
	  str = expr.getAttribute("value") + str;
	  expr.setAttribute("value",str);
	  
	  }
	  
	function compute(){
      var expr = document.getElementById("expr");
	  var str = eval(expr.getAttribute("value"));
	  expr.setAttribute("value",str);
      }	
	  
	function backspace(){
	  var expr = document.getElementById("expr");
	  var str = expr.getAttribute("value");
	  str = str.substr(0,str.length - 1);
	  expr.setAttribute("value",str);
	  	  
	  }
	function clearScreen(){
	  var expr = document.getElementById("expr");
	  expr.setAttribute("value","");
	  }