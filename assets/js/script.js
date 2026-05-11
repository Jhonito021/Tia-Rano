// Menu mobile
const mobileBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '80px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = 'white';
            navLinks.style.padding = '20px';
            navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            navLinks.style.zIndex = '999';
        }
    });
}

// Flatpickr calendrier (réservation)
if (document.getElementById('calendarInput')) {
    flatpickr("#calendarInput", {
        locale: "fr",
        minDate: "today",
        dateFormat: "Y-m-d",
        altInput: true,
        altFormat: "j F Y",
    });
}

// Formulaire réservation
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('bk_name').value.trim();
        const phone = document.getElementById('bk_phone').value.trim();
        const service = document.getElementById('bk_service').value;
        const location = document.getElementById('bk_location').value.trim();
        const date = document.getElementById('calendarInput').value;
        if (!name || !phone || !service || !location || !date) {
            document.getElementById('bookingMessage').innerHTML = '<span style="color:#e11d48;">Veuillez remplir tous les champs obligatoires.</span>';
            return;
        }
        document.getElementById('bookingMessage').innerHTML = '<span style="color:#15803d;">✅ Demande envoyée ! Nous vous contacterons sous 24h pour confirmer le rendez-vous.</span>';
        bookingForm.reset();
        if (document.getElementById('calendarInput')._flatpickr) document.getElementById('calendarInput')._flatpickr.clear();
    });
}

// Demande de devis
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('q_name').value.trim();
        const email = document.getElementById('q_email').value.trim();
        const project = document.getElementById('q_project').value;
        const location = document.getElementById('q_location').value.trim();
        if (!name || !email || !project || !location) {
            document.getElementById('quoteMessage').innerHTML = '<span style="color:#e11d48;">Merci de compléter les informations requises.</span>';
            return;
        }
        document.getElementById('quoteMessage').innerHTML = '<span style="color:#15803d;">📩 Votre demande de devis a bien été reçue. Réponse sous 48h.</span>';
        quoteForm.reset();
    });
}

// Contact simple
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('contactMessage').innerHTML = '<span style="color:#15803d;">Message envoyé ! Nous vous répondrons rapidement.</span>';
        contactForm.reset();
    });
}

// Carte Leaflet (localisation Antananarivo)
const mapContainer = document.getElementById('map');
if (mapContainer && typeof L !== 'undefined') {
    const map = L.map('map').setView([-18.8792, 47.5079], 13);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> & CartoDB',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);
    L.marker([-18.8792, 47.5079]).addTo(map).bindPopup('TI RANO - Siège Antananarivo').openPopup();
}

// Navigation smooth pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === "#") return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            if (navLinks && window.innerWidth <= 768 && navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            }
        }
    });
});