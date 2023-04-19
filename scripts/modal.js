// obtenemos el modal y el botón de cierre
var modal = document.getElementById("myModal");
var closeBtn = document.getElementsByClassName("close")[0];

// mostramos el modal al cargar la página
window.onload = function () {
    modal.style.display = "block";
}

// cerramos el modal cuando se hace clic en la X
closeBtn.onclick = function () {
    modal.style.display = "none";
}

// cerramos el modal cuando se hace clic fuera del contenido
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
