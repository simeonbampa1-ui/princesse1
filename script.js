const bg = document.getElementById('magic-background');

// 1. Génération du ciel étoilé féerique
function createStars() {
    const starCount = 120;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Taille et position aléatoires
        const size = Math.random() * 3 + 1 + 'px';
        star.style.width = size;
        star.style.height = size;
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        
        // Durée de scintillement aléatoire
        star.style.animationDuration = Math.random() * 2 + 1 + 's';
        star.style.animationDelay = Math.random() * 2 + 's';
        
        bg.appendChild(star);
    }
}

// 2. Génération des cœurs flottants continus
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    
    // Variété d'icônes féeriques et romantiques
    const icons = ['❤️', '💖', '✨', '💕', '🌸'];
    heart.innerText = icons[Math.floor(Math.random() * icons.length)];
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 1.2 + 0.8 + 'rem';
    
    const duration = Math.random() * 4 + 5; // Entre 5 et 9 secondes
    heart.style.animationDuration = duration + 's';
    
    bg.appendChild(heart);

    // Suppression après l'animation pour garder le site fluide
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// 3. Navigation entre les 3 pages
function goToPage(pageNumber) {
    // Cache toutes les pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Affiche la page demandée
    const targetPage = document.getElementById('page' + pageNumber);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Petit effet magique à chaque changement de page
    burstHearts(8);
}

// 4. Explosion de cœurs au clic sur le bouton final
function burstHearts(count = 25) {
    for (let i = 0; i < count; i++) {
        setTimeout(createFloatingHeart, i * 80);
    }
}

// Lancement initial au chargement de la page
createStars();
setInterval(createFloatingHeart, 700); // Fait monter un cœur toutes les 0.7 secondes
