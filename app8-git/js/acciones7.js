// JavaScript Document 
$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){ //esuchador de eventos
		$('#izquierda').on("swipeleft",function(){ //deslizar a la izquierda
			navigator.notification.alert("Deslizó hacia la izquierda",function(){"aplicación 7", "Ok"});//aparece mensaje alert
		}); //cierra swipe izquierda
		$('#derecha').on("swiperight",function(){ //desliza derecha
			navigator.notification.confirm("¿Que quieres hacer?",function(op){ //aparece mensaje para confirmar
				switch(op) //valiable op para opciones
				{
					case 1:
					navigator.notification.beep(1);//suena el dispositivo
					break;
					
					case 2:
					navigator.notification.vibrate(3000); //vibra el dispositivo
					break;
				}
			},"aplicacion7","Beepear,Vibrar,Canselar");
			});
	},false);
});
