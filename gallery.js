const galleryCards = document.querySelectorAll('[data-lightbox="gridImage"]');
const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlay-image');
const closeButton = document.getElementById('close-button');

galleryCards.forEach((card, index) => {
  card.addEventListener("click", () => {
    overlay.style.display = "block";
    overlayImage.src = `./images/cat${index + 1}.jpg`;
  });
});
closeButton.addEventListener("click", () => {
  overlay.style.display = "none";
  overlayImage.src = "";
})