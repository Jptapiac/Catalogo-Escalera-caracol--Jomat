/* =====================================================
   SCRIPT DE GALERÍA (sin miniaturas visibles)
   - Genera internamente la lista de imágenes que existan
   - Permite navegar con flechas y teclado
   - No muestra miniaturas en pantalla
   ===================================================== */

const MAX_CHECK = 50;
let images = [];
let currentIndex = 0;

function setMainImageByIndex(idx) {
    if (!images || images.length === 0) return;
    idx = ((idx % images.length) + images.length) % images.length; // garantizar rango
    currentIndex = idx;
    const mainImage = document.getElementById('mainImage');
    if (!mainImage) return;
    mainImage.style.opacity = '0.5';
    setTimeout(() => {
        mainImage.src = images[currentIndex];
        mainImage.alt = `Escalera ${currentIndex + 1}`;
        mainImage.style.opacity = '1';
    }, 100);

    const currentEl = document.getElementById('currentImageNum');
    if (currentEl) currentEl.textContent = (currentIndex + 1).toString();
}

function generateImageList() {
    images = [];
    const totalEl = document.getElementById('totalImages');
    const currentEl = document.getElementById('currentImageNum');
    if (totalEl) totalEl.textContent = '0';
    if (currentEl) currentEl.textContent = '0';

    for (let i = 1; i <= MAX_CHECK; i++) {
        (function(index) {
            const path = `images/escalera${index}.jpg`;
            const probe = new Image();
            probe.onload = function() {
                images.push(path);
                // actualizar contador
                if (totalEl) totalEl.textContent = images.length.toString();
                if (images.length === 1) {
                    // primera imagen encontrada
                    setMainImageByIndex(0);
                }
            };
            probe.onerror = function() {
                // ignorar
            };
            probe.src = path;
        })(i);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    generateImageList();

    const mainImage = document.getElementById('mainImage');
    if (mainImage) mainImage.style.transition = 'opacity 0.2s ease-in-out';

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseenter', () => button.style.transform = 'translateY(-3px)');
        button.addEventListener('mouseleave', () => button.style.transform = 'translateY(0)');
    });
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') prevImage();
    if (event.key === 'ArrowRight') nextImage();
});

function prevImage() {
    if (!images || images.length === 0) return;
    setMainImageByIndex(currentIndex - 1);
}

function nextImage() {
    if (!images || images.length === 0) return;
    setMainImageByIndex(currentIndex + 1);
}

function trackContactClick(buttonType) {
    console.log('Usuario hizo clic en:', buttonType);
}
