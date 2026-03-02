function updateDateTime() {
    const now = new Date();

    // Update Time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('current-time').textContent = `${hours}:${minutes}`;

    // Update Date (English Format)
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const dateStr = now.toLocaleDateString('en-US', options);

    document.getElementById('current-date').textContent = dateStr;
}

// Initial update
updateDateTime();

// Keep time updated
setInterval(updateDateTime, 1000);

// Transition from Lock Screen to App View
const alertBox = document.getElementById('alert');
const lockScreenContent = document.querySelector('.lock-screen-content');
const appView = document.getElementById('app-view');

alertBox.addEventListener('click', () => {
    // 1. Shrink and slide down animation
    alertBox.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    alertBox.style.transform = 'translateY(300px) scale(0.5)';
    alertBox.style.opacity = '0';

    // 2. Hide lock screen and show app view
    setTimeout(() => {
        lockScreenContent.classList.add('hidden');
        appView.classList.add('active');
    }, 400);
});

// Modal Logic
const alertModal = document.getElementById('alert-modal');
const modalClose = document.getElementById('modal-close');
const minimizedPill = document.getElementById('minimized-pill');
const mapMarkers = document.querySelectorAll('.marker.clickable');

function showModal() {
    alertModal.classList.add('active');
}

function hideModal() {
    alertModal.classList.remove('active');
}

// Click markers to show modal
mapMarkers.forEach(marker => {
    marker.addEventListener('click', (e) => {
        e.stopPropagation();
        showModal();
    });
});

// Close modal
if (modalClose) {
    modalClose.addEventListener('click', hideModal);
}

// Close modal when clicking background
if (alertModal) {
    alertModal.addEventListener('click', (e) => {
        if (e.target === alertModal) hideModal();
    });
}

// Flashlight toggle effect
const flashlight = document.querySelector('.flashlight');
let isFlashOn = false;
flashlight.addEventListener('click', () => {
    isFlashOn = !isFlashOn;
    flashlight.style.backgroundColor = isFlashOn ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.2)';
    flashlight.style.color = isFlashOn ? '#000' : '#fff';
});

const sosBtn = document.querySelector('.sos-fab');
if (sosBtn) {
    sosBtn.addEventListener('click', () => {
        alert('Emergency services have been notified of your location.');
    });
}
