
const articulo = document.querySelector("#contenido__socios")
const articuloDos = document.querySelector("#contenido__benef")
const boton = document.querySelector("#botonUno")

function verMas() {
    if(articulo.className == "abierto"){
        articulo.className = "";
        document.querySelector("#botonUno").textContent = "Socios";
    } else{
        articulo.className = "abierto";
        document.querySelector("#botonUno").textContent = "Cerrar";
    }
}

function verMasDos() {
    if(articuloDos.className == "abierto"){
        articuloDos.className = "";
        document.querySelector("#botonDos").textContent = "Beneficiarios";
    } else{
        articuloDos.className = "abierto";
        document.querySelector("#botonDos").textContent = "Cerrar";
    }
}