const btnProductoUno = document.querySelector("#btnProductoUno")
const btnProductoDos = document.querySelector("#btnProductoDos")
const desProductoUno = document.querySelector("#desProductoUno")
const desProductoDos = document.querySelector("#desProductoDos")


function verProductoUno() {

    if(desProductoDos.className == "off"){
        console.log("La clase de desProductoUno es OFF")
    } else{
        btnProductoDos.className = "";
        btnProductoUno.className = "active";
        desProductoUno.className = "on";
        desProductoDos.className = "off";
    }
}

function verProductoDos() {

    if(desProductoUno.className == "off"){
        console.log("La clase de desProductoUno es OFF")
    } else{
        btnProductoDos.className = "active";
        btnProductoUno.className = "";
        desProductoUno.className = "off";
        desProductoDos.className = "on";
    }
}
