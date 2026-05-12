// Numéro WhatsApp de l'entreprise (à remplacer par le vrai numéro)
const WHATSAPP_NUMBER = "261348347747";

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

// Fonction pour encoder un message pour WhatsApp
function encodeWhatsAppMessage(message) {
    return encodeURIComponent(message);
}

// Fonction pour ouvrir WhatsApp avec le message
function sendToWhatsApp(message) {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeWhatsAppMessage(message)}`;
    window.open(whatsappUrl, '_blank');
}

// === FORMULAIRE DE RÉSERVATION AVEC ENVOI WHATSAPP ===
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Récupération des valeurs
        const name = document.getElementById('bk_name').value.trim();
        const phone = document.getElementById('bk_phone').value.trim();
        const service = document.getElementById('bk_service').value;
        const location = document.getElementById('bk_location').value.trim();
        const date = document.getElementById('calendarInput').value;
        const details = document.getElementById('bk_message').value.trim();
        
        // Validation
        if (!name || !phone || !service || !location || !date) {
            document.getElementById('bookingMessage').innerHTML = '<span style="color:#e11d48;">❌ Veuillez remplir tous les champs obligatoires.</span>';
            return;
        }
        
        // Construction du message WhatsApp
        let message = "🏢 *NOUVELLE DEMANDE DE RÉSERVATION - TI RANO* 🏢\n\n";
        message += `👤 *Nom complet:* ${name}\n`;
        message += `📞 *Téléphone:* ${phone}\n`;
        message += `🛠️ *Service:* ${service}\n`;
        message += `📍 *Localisation:* ${location}\n`;
        message += `📅 *Date souhaitée:* ${date}\n`;
        if (details) {
            message += `📝 *Détails:* ${details}\n`;
        }
        message += `\n⏰ Merci de confirmer ce rendez-vous.`;
        
        // Envoi vers WhatsApp
        sendToWhatsApp(message);
        
        // Feedback utilisateur
        document.getElementById('bookingMessage').innerHTML = '<span style="color:#15803d;">✅ Redirection vers WhatsApp... Envoyez le message pour confirmer votre réservation.</span>';
        
        // Réinitialisation optionnelle
        setTimeout(() => {
            bookingForm.reset();
            if (document.getElementById('calendarInput')._flatpickr) {
                document.getElementById('calendarInput')._flatpickr.clear();
            }
            document.getElementById('bookingMessage').innerHTML = '';
        }, 3000);
    });
}

// === FORMULAIRE DE DEMANDE DE DEVIS AVEC ENVOI WHATSAPP ===
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Récupération des valeurs
        const name = document.getElementById('q_name').value.trim();
        const email = document.getElementById('q_email').value.trim();
        const phone = document.getElementById('q_phone').value.trim();
        const project = document.getElementById('q_project').value;
        const budget = document.getElementById('q_budget').value.trim();
        const location = document.getElementById('q_location').value.trim();
        const message = document.getElementById('q_message').value.trim();
        
        // Validation
        if (!name || !email || !project || !location || !phone) {
            document.getElementById('quoteMessage').innerHTML = '<span style="color:#e11d48;">❌ Veuillez remplir tous les champs obligatoires (*).</span>';
            return;
        }
        
        // Construction du message WhatsApp
        let whatsMsg = "📊 *NOUVELLE DEMANDE DE DEVIS - TI RANO* 📊\n\n";
        whatsMsg += `👤 *Nom & prénom:* ${name}\n`;
        whatsMsg += `📧 *Email:* ${email}\n`;
        whatsMsg += `📞 *Téléphone:* ${phone}\n`;
        whatsMsg += `🏗️ *Type de projet:* ${project}\n`;
        whatsMsg += `📍 *Localisation:* ${location}\n`;
        if (budget) {
            whatsMsg += `💰 *Budget estimatif:* ${budget} Ar\n`;
        }
        if (message) {
            whatsMsg += `\n📝 *Message:*\n${message}\n`;
        }
        whatsMsg += `\n🔹 Merci de me contacter pour ce projet.`;
        
        // Envoi vers WhatsApp
        sendToWhatsApp(whatsMsg);
        
        // Feedback utilisateur
        document.getElementById('quoteMessage').innerHTML = '<span style="color:#15803d;">✅ Redirection vers WhatsApp... Envoyez le message pour finaliser votre demande de devis.</span>';
        
        // Réinitialisation
        setTimeout(() => {
            quoteForm.reset();
            document.getElementById('quoteMessage').innerHTML = '';
        }, 3000);
    });
}

// === FORMULAIRE DE CONTACT SIMPLE ===
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('contact_name').value.trim();
        const email = document.getElementById('contact_email').value.trim();
        const msg = document.getElementById('contact_msg').value.trim();
        
        if (!name || !email || !msg) {
            document.getElementById('contactMessage').innerHTML = '<span style="color:#e11d48;">❌ Veuillez remplir tous les champs.</span>';
            return;
        }
        
        // Construction message WhatsApp pour contact simple
        let contactMsg = "💬 *NOUVEAU MESSAGE - TI RANO* 💬\n\n";
        contactMsg += `👤 *Nom:* ${name}\n`;
        contactMsg += `📧 *Email:* ${email}\n`;
        contactMsg += `📝 *Message:*\n${msg}\n`;
        
        sendToWhatsApp(contactMsg);
        
        document.getElementById('contactMessage').innerHTML = '<span style="color:#15803d;">✅ Message envoyé sur WhatsApp ! Nous vous répondrons rapidement.</span>';
        
        setTimeout(() => {
            contactForm.reset();
            document.getElementById('contactMessage').innerHTML = '';
        }, 3000);
    });
}

// Carte Leaflet
const mapContainer = document.getElementById('map');
if (mapContainer && typeof L !== 'undefined') {
    // Coordonnées extraites du lien Google Maps
    const latitude = -18.9945; 
    const longitude = 47.5361; 

    const map = L.map('map').setView([latitude, longitude], 15);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> & CartoDB',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map).bindPopup('TI RANO - Mandrimena Iavoloha, Antananarivo').openPopup();}
// Navigation smooth
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

// WhatsApp flottant (optionnel) - bouton fixe
const floatingWhatsApp = document.createElement('a');
floatingWhatsApp.href = `https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour%20TI%20RANO%2C%20je%20souhaite%20obtenir%20des%20informations.`;
floatingWhatsApp.target = '_blank';
floatingWhatsApp.innerHTML = '<i class="fab fa-whatsapp"></i>';


floatingWhatsApp.style.position = 'fixed';
floatingWhatsApp.style.bottom = '20px';
floatingWhatsApp.style.right = '20px';
floatingWhatsApp.style.backgroundColor = '#25D366';
floatingWhatsApp.style.color = 'white';
floatingWhatsApp.style.width = '60px';
floatingWhatsApp.style.height = '60px';
floatingWhatsApp.style.borderRadius = '50%';
floatingWhatsApp.style.display = 'flex';
floatingWhatsApp.style.alignItems = 'center';
floatingWhatsApp.style.justifyContent = 'center';
floatingWhatsApp.style.fontSize = '30px';
floatingWhatsApp.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
floatingWhatsApp.style.zIndex = '1000';
floatingWhatsApp.style.transition = 'transform 0.3s';
floatingWhatsApp.style.textDecoration = 'none';
floatingWhatsApp.onmouseover = () => floatingWhatsApp.style.transform = 'scale(1.1)';
floatingWhatsApp.onmouseout = () => floatingWhatsApp.style.transform = 'scale(1)';
document.body.appendChild(floatingWhatsApp);