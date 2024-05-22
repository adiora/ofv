document.getElementById('download-link').addEventListener('click', function() {
    showNotification('Your download is starting. Please wait.');
    // Simulate download delay
    setTimeout(function() {
        hideNotification();
    }, 3000); // Change 3000 to the actual duration of your download
});

function showNotification(message) {
    var notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
}

function hideNotification() {
    var notification = document.getElementById('notification');
    notification.style.display = 'none';
}
