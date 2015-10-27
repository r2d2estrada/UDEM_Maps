/**
    {
        "Id": "",
        "Name": "",
        "Abrev": "",
        "coords": "",
        "Specs": ""
    }

    Markup for images:
    <img title='{Some-id}' src='icons/{fileName}.{extension}' />

    Getting coordenates from google maps
    1. Open Google maps
    2. Type address (Universidad de monterrey)
    3. Right click on spot > select what's here (¿Qué hay aquí?)
    4. Copy coordinates
    5. paste onbject attr value (coords)
**/

var ItemsObj = [
    //default location
    {
        "Id": "JF",
        "Name": "Jardín Fundadores",
        "Abrev": "<img title='JF' src='icons/spotted1.png' />",
        "coords": "25.660867, -100.419929",
        "Specs": "Jardín central entre aulas, biblioteca y Centro de la Comunidad"
    },
    //default location
    {
        "Id": "CIA",
        "Name": "Centro de Información y Atención a Alumnos (Rectoría)",
        "Abrev": "CIA",
        "coords": "25.662682, -100.420060",
        "Specs": "Edificio de Rectoría de la Universidad de Monterrey"
    },
    {
        "Id": "Biblio",
        "Name": "Biblioteca UDEM",
        "Abrev": "<img title='SC' src='icons/books78.png'/>",
        "coords": "25.661174, -100.419556",
        "Specs": "Biblioteca de la Universidad de Monterrey"
    },
    {
        "Id": "CC",
        "Name": "Centro de la Comunidad",
        "Abrev": "CCU",
        "coords": "25.660323, -100.420082",
        "Specs": "Abreviado CCU, En el e encuentra el teatro, la capilla, una sucursal de Banorte, cafetería con diversas opciones y aulas formativas"
    },
    {
        "Id": "Theater",
        "Name": "Teatro UDEM",
        "Abrev": "<img title='Teatro-Udem' src='icons/theater3.png'/>",
        "coords": "25.660313, -100.419621",
        "Specs": "Se encuentra dentro del centro de la comunidad"
    },
    {
        "Id": "CGS",
        "Name": "Centro Roberto Garza Sada",
        "Abrev": "CGS",
        "coords": "25.661899, -100.422432",
        "Specs": "Escuela de arte y arquitectura de la Universidad de Monterrey"
    },
    {
        "Id": "Sports",
        "Name": "Centro Deportivo",
        "Abrev": "<img title='SC' src='icons/weightlifting4.png'/>",
        "coords": "25.664104, -100.418194",
        "Specs": "Ginmasio para uso de los alumnos"
    },
    {
        "Id": "Stbks",
        "Name": "Starbucks",
        "Abrev": "<img title='Starbucks' src='icons/drink75.png'/>",
        "coords": "25.661802, -100.420307",
        "Specs": "Sucursal de Starbucks situado el pabellón central entre los edificios de aulas de clase"
    },
    {
        "Id": "USP",
        "Name": "Preparatoria UDEM Unidad San Pedro",
        "Abrev": "USP",
        "coords": "25.657528, -100.420972",
        "Specs": "Preparatoria UDEM Campus San Pedro"
    },
    {
        "Id": "Res",
        "Name": "Residencias UDEM",
        "Abrev": "<img title='res' src='icons/sleeping.png'/>",
        "coords": "25.659879, -100.422199",
        "Specs": "Residencias para estudiantes dentro del campus de la Universidad"
    }
];

var defaultOBJ = ItemsObj[0];
