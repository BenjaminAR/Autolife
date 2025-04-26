const images = [
    "../img/FondoEG/1.webp",
    "../img/FondoEG/2.webp",
    "../img/FondoEG/3.webp",
    "../img/FondoEG/4.webp",
    "../img/FondoEG/5.webp",
    "../img/FondoEG/6.webp"
  ];
  
  let currentIndex = 0;
  const backgroundElement = document.getElementById("backgroundAnimation");
  
  // Función para pre-cargar las imágenes
  function preloadImages() {
    images.forEach(image => {
      const img = new Image();
      img.src = image; // Cargar la imagen de fondo en segundo plano
    });
  }
  
  // Cambiar imagen con transición de opacidad
  function changeBackgroundImage() {
    // Fade out de la imagen actual
    backgroundElement.style.opacity = 0;
  
    // Cambiar la imagen después de la transición
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % images.length; // Mover al siguiente fondo
      backgroundElement.style.backgroundImage = `url(${images[currentIndex]})`;
      
      // Fade in con la nueva imagen
      backgroundElement.style.opacity = 1;
    }, 1000); // Esperar 1 segundo para que termine el fade out
  }
  
  // Pre-cargar las imágenes al cargar la página
  preloadImages();
  
  // Cambiar la imagen cada 5 segundos
  setInterval(changeBackgroundImage, 3000);
  
  // Inicializar con la primera imagen
  backgroundElement.style.backgroundImage = `url(${images[currentIndex]})`;
  