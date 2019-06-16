
var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var id = url.searchParams.get("id");
console.log(id);

fetch("https://api.themoviedb.org/3/movie/" + id + "?api_key=0bcd16440b25702a4e2645e9b22f2a2d&language=en-US")
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(informacion) {
    console.log(informacion);
    var div
    var nombre
    var imagen
    var descripcion
    var estreno

    nombre = informacion.title;
    imagen = "https://image.tmdb.org/t/p/w500/" + informacion.poster_path;
    descripcion = informacion.overview;
    estreno = informacion.release_date;
    id = informacion.id;

    var contenedor = document.querySelector(".row");

    contenedor.innerHTML =  "<div class='col-4 '>"
                            + "<img class='w-100' src=" + imagen + ">"
                           + "</div>" //ACOMODAR IMAGENES CONTENEDOR BOOSTRAP

    contenedor.innerHTML +=  "<div class='col-8 alert alert-warning w-100'>"
                              + "<h1 class=''>" + nombre + "</h1>"
                              + "<h5 class=''>" + estreno + "</h5>"
                              + "<br>"
                              + "<h5 class='video'>" + descripcion + "</h5>"
                            + "</div>"

      })


  .catch(function(error) {
    console.log("Error: " + error);
  })

//////////////////////////// TRAILER /

fetch("https://api.themoviedb.org/3/movie/" + id + "/videos?api_key=0bcd16440b25702a4e2645e9b22f2a2d&language=en-US")
  .then(function(respuesta) {
    return respuesta.json()
    })

  .then(function(informacion) {
    console.log(informacion);
    var contenedor = document.querySelector(".video");
    var video = informacion.results[0].key
    console.log(video);
    contenedor.innerHTML += "<br>"
                          +"<br>"
                          + "<iframe class='col-12' width='560' height='315' src='https://www.youtube.com/embed/" + video + "frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
    })

  .catch(function(error) {
    console.log("Error: " + error);
    })
