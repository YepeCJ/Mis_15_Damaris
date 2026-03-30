const targetDate = new Date("April 18, 2026 20:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById("days").innerText = "00";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);

  document.getElementById("days").innerText = String(days).padStart(2, "0");
  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

const playBtn = document.getElementById("playBtn");
const music = document.getElementById("bgMusic");

playBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    playBtn.innerText = "❚❚";
  } else {
    music.pause();
    playBtn.innerText = "▶";
  }
});