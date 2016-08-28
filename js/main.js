$(document).ready(function() {
	$('#search-query').focus();
});

$('#advanced-search-button').click(function() {
	$('.advanced-search-panel').slideToggle('fast');
	$(this).toggleClass('active');
});