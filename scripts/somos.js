
const articulo = document.querySelector("#contenido__socios")
const articuloDos = document.querySelector("#contenido__benef")
const boton = document.querySelector("#botonUno")
const botonDos = document.querySelector("#botonDos")

function verMas() {
    if(articulo.className == "abierto"){
        articulo.className = "";
        boton.textContent = "Socios";
    } else{
        articulo.className = "abierto";
        boton.textContent = "Cerrar";
    }
}

function verMasDos() {
    if(articuloDos.className == "abierto"){
        articuloDos.className = "";
        botonDos.textContent = "Beneficiarios";
    } else{
        articuloDos.className = "abierto";
        botonDos.textContent = "Cerrar";
    }
}