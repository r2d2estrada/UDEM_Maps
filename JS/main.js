$(document).ready(function(){
	if (!navigator.online) {
        swal ({
            title: "No hay conexión a internet datos",
            text: "Para el funcionamiento de UDEM MAPS es necesario estar conectado a la red (3G, 4G, Edge etc) o estar conectado a una red de wifi. Asegúrese de estar conectad@ y reinicie la aplicación.",
            type: "error",
            confirmButtonText: "Entendido"
        });
    } else {
        loadContents();
    }
});

function loadContents() {
	var date = new Date();
	var year = date.getFullYear();

	$('#year').append(year);
	$('#maps-year').append(year);
    $('#map').attr('src', UDEM_LOC_MAP);
}
