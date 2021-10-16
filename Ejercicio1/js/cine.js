var peliculas = {
    "Personas": [
    {"imagen" : "img/",
    "nombre" : "",
    "duracion" : "",
    "clasificacion" : ""},
    {"imagen" : "img/",
    "nombre" : "",
    "duracion" : "",
    "clasificacion" : ""},
    {"imagen" : "img/",
    "nombre" : "",
    "duracion" : "",
    "clasificacion" : ""}
    ]
};

// ACOPLAR EL SIGUIENTE CODIGO A LA CARTELERA DE PELICULAS

//Obteniendo el elemento contenedor donde se cargarán
//todos los datos del objeto JSON
var div = document.getElementById("info");
div.innerHTML = volcarDatos(peliculas.Personas);
function volcarDatos(datos){
    var total = datos.length;
    data = "<ul class=\"grid\">\n";
    for(var i=0; i<total; i++){
    data += "<li class=\"box\">\n";
    data += "<div class=\"box-shadow\"></div>\n";
    data += "<div class=\"box-gradient\">\n";
    data += "<img src=\"" + datos[i].imagen + "\" alt=\"Avatar de " +
    datos[i].nombre + " " + datos[i].duracion + "\" class=\"avatar\" />\n";
    data += "<h4>\nTitulo de la pelicula: " + datos[i].nombre + " " + datos[i].duracion + "\n</h4>\n";
    data += "Duración: " + datos[i].duracion + "\n</p>\n";
    data += "Clasificación: " + datos[i].clasificacion + "\n</p>\n";
    data += "</div>\n";
    data += "</li>\n";
 }
 data += "</ul>\n";
 return data;
}