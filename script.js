// Mouse ışık efekti
document.addEventListener("mousemove", e => {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
});

// Ceza Tarihini Otomatik Güncel Bugün Yapma
document.addEventListener("DOMContentLoaded", () => {
  const cezaTarihiInput = document.getElementById("cezaTarihi");
  if (cezaTarihiInput) {
    const bugun = new Date();
    const yil = bugun.getFullYear();
    const ay = String(bugun.getMonth() + 1).padStart(2, '0');
    const gun = String(bugun.getDate()).padStart(2, '0');
    
    cezaTarihiInput.value = `${yil}-${ay}-${gun}`;
  }
});
