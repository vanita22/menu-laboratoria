$(function(){
	var header = document.getElementById('header');
	var headroom = new Headroom(header);
	headroom.init();/*nos muestra en que posición del body están las pestañas en el body*/

	var ancho = $(window).width(),
		pestana = $('#pestana'),
		btnMenu = $('#btn-menu'),
		icono =$('#btn-menu .icono');

	/*condiciones*/
	if(ancho < 700){
		pestana.hide();
		icono.addClass('fa-bars');
	}

	btnMenu.on('click', function(e){
		pestana.slideToggle();
		icono.toggleClass('fa-bars');
		icono.toggleClass('fa-times');
	});

	$(window).on('resize', function(e){
		if($(this).width() > 700){
			pestana.show();
			icono.addClass('fa-times');
			icono.removeClass('fa-bars');
		} else{
			pestana.hide();
			icono.addClass('fa-bars');
			icono.removeClass('fa-times');
		}
	});

});

alert("hola mundoi");