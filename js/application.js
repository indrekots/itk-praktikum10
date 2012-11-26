$(document).ready(function() {
  
	//$('span').css('font-style', 'italic');
	//$('span').css('font-weight', 'bold');
	$('.hero-unit span').addClass('highlight');

	$('#copyright').html('&copy; EIK ' + new Date().getFullYear());

	$('tr:odd').css('background', '#C9C9C9');

});