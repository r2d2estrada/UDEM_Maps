$(document).ready(function(){
	loadContents();
});

function loadContents() {
	var date = new Date();
	var year = date.getFullYear();

	$('#year').append(year);
	$('#maps-year').append(year);
    $('#map').attr('src', UDEM_LOC_MAP);
}
