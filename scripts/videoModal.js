document.addEventListener("DOMContentLoaded", function () {
    openModal();
});

function openModal() {
    var modal = document.getElementById("videoModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("videoModal");
    modal.style.display = "none";
}
