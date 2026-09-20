// Mouse ışık efekti
document.addEventListener("mousemove", e => {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
});

// Otomatik Güncel Ceza Tarihi
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

// Modal Açma Fonksiyonu (Global)
window.openModal = function(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('active');
  }
};

// Modal Kapama Fonksiyonu (Global)
window.closeModal = function(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('active');
  }
};

// Arka plana tıklayınca kapatma
window.addEventListener('click', function(event) {
  if (event.target.classList.contains('modal-overlay')) {
    event.target.classList.remove('active');
  }
});
