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

// Modal Açma Fonksiyonu
window.openModal = function(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('active');
  }
};

// Modal Kapama Fonksiyonu
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

// Başarı Bildirimi Gösterme Fonksiyonu
function showToast(message) {
  const toast = document.getElementById("toastNotification");
  toast.innerText = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000); // 4 saniye sonra kaybolur
}

// FORM GÖNDERME KODLARI (AJAX / Sayfa Yenilenmeden)
function handleFormSubmit(formId, modalId, successMessage) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // Sayfa yönlendirmesini engeller

    const submitBtn = form.querySelector(".btn-submit");
    const originalText = submitBtn.innerText;

    submitBtn.innerText = "Gönderiliyor...";
    submitBtn.disabled = true;

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        closeModal(modalId);
        form.reset();
        showToast(successMessage);
      } else {
        alert("Gönderilirken bir hata oluştu, lütfen tekrar deneyin.");
      }
    })
    .catch(error => {
      console.error(error);
      alert("Bağlantı hatası oluştu!");
    })
    .finally(() => {
      submitBtn.innerText = originalText;
      submitBtn.disabled = false;
    });
  });
}

// Form Dinleyicilerini Başlat
document.addEventListener("DOMContentLoaded", () => {
  handleFormSubmit("cezaForm", "cezaModal", "⚖️ Ceza İtirazınız başarıyla gönderildi!");
  handleFormSubmit("destekForm", "destekModal", "📩 Destek Talebiniz başarıyla gönderildi!");
});
