// Mouse ışık efekti
document.addEventListener("mousemove", e => {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
});

// Geri sayım örneği (yakında açılıyor)
const countdownElement = document.getElementById("countdown");
let countdownDate = new Date("August 1, 2026 00:00:00").getTime();

setInterval(() => {
  let now = new Date().getTime();
  let distance = countdownDate - now;

  if (distance < 0) {
    countdownElement.innerHTML = "Sunucu Açıldı 🎉";
  } else {
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}g ${hours}s ${minutes}d ${seconds}sn`;
  }
}, 1000);
