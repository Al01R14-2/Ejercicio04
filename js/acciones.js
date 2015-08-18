// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	$('#btn_sonido').click(function(){
		alert ("click a btn-sonido")
		if ($('#btn_sonido').hasClass('ui-icon-audio'))
		{
			//Apagar Audio
			$('#btn_sonido').removeClass('ui-icon-audio');
			$('#btn_sonido').addClass('ui-icon-forbidden');
			alert('se apago el sonido');
		}
		
			else
			{
				 $('#btn_sonido').removeClass('ui-icon-forbidden');
		         $('#btn_sonido').addClass('ui-icon-audio');
		    alert('se prendio el audio');
		}
	});
//}); 
});

