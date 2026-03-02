function updateDateTime() {
    const now = new Date();
    
    // Update Time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('current-time').textContent = `${hours}:${minutes}`;

    // Update Date (Chinese Format)
    const options = { month: 'long', day: 'numeric', weekday: 'long' };
    const dateStr = now.toLocaleDateString('zh-CN', options);
    
    // Simplistic Lunar date calculation (just for visual parody of the image)
    const lunarYear = "丙午年";
    const lunarDate = "正月十四";
    document.getElementById('current-date').textContent = `${dateStr} · ${lunarYear}${lunarDate}`;
}

// Initial update
updateDateTime();

// Keep time updated
setInterval(updateDateTime, 1000);

// Simple interaction: click the alert to dismiss/show details
const alertBox = document.getElementById('alert');
alertBox.addEventListener('click', () => {
    alertBox.style.transition = 'all 0.5s ease-out';
    alertBox.style.transform = 'scale(1.02)';
    setTimeout(() => {
        alertBox.style.transform = 'scale(1)';
    }, 200);
});

// Flashlight toggle effect
const flashlight = document.querySelector('.flashlight');
let isFlashOn = false;
flashlight.addEventListener('click', () => {
    isFlashOn = !isFlashOn;
    flashlight.style.backgroundColor = isFlashOn ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.2)';
    flashlight.style.color = isFlashOn ? '#000' : '#fff';
});
