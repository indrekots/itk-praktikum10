$(document).ready(function() {
  
	//$('span').css('font-style', 'italic');
	//$('span').css('font-weight', 'bold');
	$('.hero-unit span').addClass('highlight');

	$('#copyright').html('&copy; EIK ' + new Date().getFullYear());

	$('tr:odd').css('background', '#C9C9C9');

	$('.dropdown-toggle').click(function() {
		$('.dropdown-menu').fadeToggle();
	});

	$('#insertUser').click(function() {
		var validationError = false;
		$(".control-group").each(function(index, value) {
			if ($(this).find('input').val() === '') {
				validationError = true;
				$(this).addClass('error');
				$(this).find('.help-inline').text('Can not be empty');
			}
			else {
				$(this).removeClass('error');
				$(this).find('.help-inline').text('');
			}
		});

		if (validationError) {
			return;
		}

		insertUser(readUserFromForm());
		$('tr:odd').css('background', '#C9C9C9');
		$("#users tbody tr").each(function(index, value) {
			$(value).find('td').first().html(index + 1);
		});
		$('#addUser input[type="text"]').val('');
	});
});

function insertUser(user) {
	var tRow = $('<tr></tr>')
				.append($('<td></td>'))
				.append($('<td></td>').text(user.firstName))
				.append($('<td></td>').text(user.lastName))
				.append($('<td></td>').text(user.userName));
				console.log(tRow.html());
	$('#users tbody').append(tRow.fadeIn());
}

function readUserFromForm() {
	var firstName = $('input[name="firstName"]').val();
	var lastName = $('input[name="lastName"]').val();
	var userName = $('input[name="userName"]').val();

	return {firstName: firstName, lastName: lastName, userName: userName};
}