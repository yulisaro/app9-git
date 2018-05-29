// JavaScript Document
 //tap sonar  
$(document).ready(function(e) {
   document.addEventListener("deviceready",function(){
	    $('#sonar').tap(function(){
			navigator.notification.beep(2);
         });
		 //tap  de vibrar
		 $('#vibrar').tap(function(){
			 navigator.notification.vibrate(2000);//vibra en mili segundos
		 });
   },false);//cierre deviceready
});//cierre del ready