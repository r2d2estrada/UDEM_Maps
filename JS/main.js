var selectedLocation;

$(document).ready(function(){
    if (!navigator.onLine) {
        swal ({
            title: "No hay conexión a internet o datos",
            text: "Para el funcionamiento de UDEM MAPS es necesario estar conectado a la red (3G, 4G, Edge etc) o estar conectado a una red de wifi. Asegúrese de estar conectad@ y reinicie la aplicación.",
            type: "error",
            confirmButtonText: "Entendido"
        });
    } else {
        loadContents();
        loadLocations();
    }
});

function loadContents() {
	var date = new Date();
	var year = date.getFullYear();

	$('#year').append(year);
	$('#maps-year').append(year);

    loadMapLocation();
}

function loadMapLocation() {
    //set to default loaction when initializing the application
    if (selectedLocation == 'undefined' || selectedLocation == null) {
        selectedLocation = defaultOBJ;
    }

    var position = selectedLocation.coords.split(',');
    var posX = parseFloat(position[0]);
    var posY = parseFloat(position[1]);

    //set coordenates location
    $('#map_canvas').gmap({ 'center': selectedLocation.coords, 'scrollwheel':false});
    $('#map_canvas').gmap('option', 'mapTypeId', google.maps.MapTypeId.MAP);
    $('#map_canvas').gmap('option', 'zoom', 16);

    //set markers
    $('#map_canvas').gmap('clear', 'markers'); //clear previous (if any)
    $('#map_canvas').gmap('addMarker', { 'position': new google.maps.LatLng(posX, posY) }); //set new
    $('#map_canvas').gmap('refresh');

    //set labels
    $('#titleToAppend').text(selectedLocation.Name);
    $('#placeToDescribe').text(selectedLocation.Specs);
}

function loadLocations() {
    $.each(ItemsObj, function(index, elem) {
        var nodeToAppend = '<tr onclick="getRowValues(\'' + elem.Id + '\')">' +
                                '<td>' + elem.Abrev + '</td>' +
                                '<td>' +
                                    elem.Name +
                                '</td>' +
                            '</tr>';

        $('#locationsTBL tbody').append(nodeToAppend);
    });

    $('#locationsTBL').DataTable({
        "paging":   false,
        "info": false,
        "bFilter": true,
        "order": [[ 1, "asc" ]],
        "columnDefs": [
            { "targets": 0, "orderable": false },
            { "targets": 1, "orderable": true}
        ],
        "oLanguage": { "sSearch": "" }
    });
}

function getRowValues (id) {
    $.each(ItemsObj, function(index, elem) {
        if(elem.Id == id) {
            selectedLocation = elem;
            console.log(selectedLocation);
            $('#locationsTBL_filter input').val('').trigger('search');
            $('#appSideBar').removeClass('sidebar-open', '');
        }
    });

    loadMapLocation();
}
