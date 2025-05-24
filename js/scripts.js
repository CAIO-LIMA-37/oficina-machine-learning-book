document.addEventListener('DOMContentLoaded', function() {
  // Inicializa lightbox
  const lightboxLinks = document.querySelectorAll('[data-lightbox]');
  
  lightboxLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      // Implemente sua lógica de lightbox aqui
      // ou use uma biblioteca como Lightbox2 ou Fancybox
    });
  });
  
  // Loader
  window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    if (loader) {
      loader.style.display = 'none';
    }
  });
});

// scripts.js
document.querySelectorAll('.video-container').forEach(container => {
  container.addEventListener('click', function() {
    const videoSrc = this.getAttribute('data-video-src');
    const modal = document.createElement('div');
    modal.className = 'video-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <video controls autoplay>
          <source src="${videoSrc}" type="video/mp4">
        </video>
        <span class="close-modal">&times;</span>
      </div>
    `;
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    modal.querySelector('.close-modal').addEventListener('click', () => {
      modal.remove();
      document.body.style.overflow = 'auto';
    });
  });
});

// scripts.js
function openTab(evt, tabName) {
  const tabContents = document.getElementsByClassName("tab-content");
  for (let content of tabContents) {
    content.classList.remove("active");
  }
  
  const tabButtons = document.getElementsByClassName("tab-button");
  for (let button of tabButtons) {
    button.classList.remove("active");
  }
  
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}