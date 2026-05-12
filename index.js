
  function changeImage(imageUrl) {
    document.getElementById('mainImage').src = imageUrl;

    // Highlight the active thumbnail
    document.querySelectorAll('.thumbnail').forEach(el => el.classList.remove('active'));
    document.querySelector(`img[src="${imageUrl}"]`).classList.add('active');
}

function updateImage() {
    const colorSelect = document.getElementById('colorSelect');
    const mainImage = document.getElementById('mainImage');
    mainImage.src = colorSelect.value;
}

document.addEventListener("DOMContentLoaded", () => {
  const modalEl = document.getElementById("welcomeModal");
  if (!modalEl) return;

  if (localStorage.getItem("welcomeModalShown")) return;

  setTimeout(() => {
    const modal = new bootstrap.Modal(modalEl);
    modal.show();

    localStorage.setItem("welcomeModalShown", "true");
  }, 3000);
});