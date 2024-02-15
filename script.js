function formatTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = Math.floor(seconds % 60);
    return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function startCountdown() {
    let countdownElement = document.getElementById('timer');
    let seconds = 24 * 3600; // 24 hours in seconds

    let countdownInterval = setInterval(function() {
        countdownElement.textContent = formatTime(seconds);
        seconds--;

        if (seconds < 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = "00:00:00"; 
        }
    }, 1000);
}

startCountdown();
window.onscroll = function() {
    document.querySelector('.fixed-form').style.animationPlayState = 'running';
};

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      var formContainer = document.getElementById("fixed-form");
      formContainer.classList.remove("hidden");
      formContainer.classList.add("slide-up");
    }, 15000);
  });

