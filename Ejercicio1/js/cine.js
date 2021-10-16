//Archivo JSON con los datos de las peliculas
var peliculas = {
    "Cine": [
        {"imagen" : "img/venom.jpg",
        "Pelicula" : "Venom",
        "Duracion" : "140 min ",
        "Clasificacion" : "B",
        "Butacas" : "Tradicionales",
        "Horario" : "(Mañana 7:00 am) (Tarde 14:30 pm) (Noche 19:00 pm)",
    },

        {"imagen" : "img/paranoia.jpg",
        "Pelicula" : "Disturbio",
        "Duracion" : "105 minutos",
        "Clasificacion" : "PG-13",
        "Butacas" : "Tradicionales",
        "Horario" : "(Mañana 7:00 am) (Tarde 14:30 pm) (Noche 19:00 pm)",
    },

        {"imagen" : "img/cruella.jpg",
        "Pelicula" : "Cruella",
        "Duracion" : "134 minutos",
        "Clasificacion" : "PG-13",
        "Butacas" : "Tradicionales",
        "Horario" : "(Mañana 7:00 am) (Tarde 14:30 pm) (Noche 19:00 pm)", 
    },
        {"imagen" : "img/luca.jpg",
        "Pelicula" :  "Luca",
        "Duracion" : "95 min ",
        "Clasificacion" : "A",
        "Butacas" : "Sencillas",
        "Horario" : "(Mañana 11:00 am) (Tarde 16:40 pm) (Noche 24:00 pm)",
    },
        {"imagen" : "img/guilty.jpg",
        "Pelicula" :  "The Guilty",
        "Duracion" : "91 min ",
        "Clasificacion" : "PG-13",
        "Butacas" : "VIP",
        "Horario" : "(Mañana 8:00 am) (Tarde 13:45 pm) (Noche 22:30 pm)",
    },
        {"imagen" : "img/life.jpg",
        "Pelicula" :  "Toda la vida en un año",
        "Duracion" : "	100 min ",
        "Clasificacion" : "PG'13",
        "Butacas" : "Sencilla",
        "Horario" : "(Mañana 6:30 am) (Tarde 13:05 pm) (Noche 23:40 pm) ",
    },
        {"imagen" : "img/black.jpg",
        "Pelicula" :  "Black Window",
        "Duracion" : "133 min ",
        "Clasificacion" : "PG'13",
        "Butacas" : "Sencilla",
        "Horario" : "(Mañana 7:10 am) (Tarde 17:30 pm) (Noche 21:00 pm)",
    },
        {"imagen" : "img/vivo.jpg",
        "Pelicula" :  "Nadie saldra vivo de aqui",
        "Duracion" : "85 minutos ",
        "Clasificacion" : "R",
        "Butacas" : "VIP",
        "Horario" : "(Mañana 10:59 am) (Tarde 15:45pm) (Noche 23:10 pm)",
    },
        {"imagen" :"img/mas.jpg",
        "Pelicula" :"Mas Alla de la luna",
        "Duracion" :"100 min ",
        "Clasificacion" :"PG",
        "Butacas" :"VIP",
        "Horario" :"(Mañana 8:20 am) (Tarde 15:30 pm) (Noche 21:15 pm)",
    }
    ]
};

//Obteniendo el elemento contenedor donde se cargarán
//todos los datos del objeto JSON
var div = document.getElementById("info");
div.innerHTML = volcarDatos(peliculas.Cine);
function volcarDatos(datos){
var total = datos.length;
data = "<div class='row'>";
for(var i=0; i<total; i++){
data += "<div class='card col-4' >";
data += "<img class='card-img-top' src=" + datos[i].imagen + " alt='Card image cap'>";
data += "<div class='card-body'>";
data += '<h5 class="card-title">'+datos[i].Pelicula +  '</h5></br>'
data+= "Clasificacion: "  + datos[i].Clasificacion+'</p>';
data += "<div class='duration'>";
data+= "Duracion: " + datos[i].Duracion+'</p>';
data += '</div>'
data += "<table class='tabla' border='1'>";
data+= "<tr><td>"+"Butacas: " + datos[i].Butacas + '</p>'+"</td></tr>";
data+= "<tr><td>"+"Horarios: <br>";
data+=  datos[i].Horario+'</p>'+"</td></tr>";
data += '</table>'
data += '</div>'
data += '</div>'
}
data += '</div>'
return data;
}
