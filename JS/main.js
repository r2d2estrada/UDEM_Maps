$(document).ready(function(){
	loadContents();
});

function loadContents() {
	var date = new Date();
	var year = date.getFullYear();

	$('#year').append(year);
	$('#maps-year').append(year);
}