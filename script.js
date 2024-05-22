document.getElementById('download-link').addEventListener('click', function() {
    // Show notification
    showNotification('Your download is starting. Please wait.');

    // Trigger download
    var downloadLink = document.createElement('a');
    downloadLink.href = 'https://adiora.github.io/ofv/ofvsetup.msi';
    downloadLink.download = 'ofvsetup.msi';
    downloadLink.click();

    // Hide notification after a delay
    setTimeout(function() {
        hideNotification();
    }, 3000); // Adjust delay as needed
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
