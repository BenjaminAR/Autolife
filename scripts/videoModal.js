
/*
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
*/
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '440',
        width: '700',
        videoId: 'wCXfk7RbVr0', // Reemplaza con tu video de YouTube
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    openModal();
}

function openModal() {
    var modal = document.getElementById("videoModal");
    modal.style.display = "block";
    player.playVideo();
}

function closeModal() {
    var modal = document.getElementById("videoModal");
    modal.style.display = "none";
    player.stopVideo();
}
