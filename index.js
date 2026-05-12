// Show modal on page load
document.addEventListener("DOMContentLoaded", function() {
    var welcomeModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
    welcomeModal.show();
  });



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
  const hasSeenModal = sessionStorage.getItem("welcomeModalShown");

  if (hasSeenModal) return;

  setTimeout(() => {
    const modalEl = document.getElementById("welcomeModal");
    const modal = new bootstrap.Modal(modalEl);

    modal.show();

    sessionStorage.setItem("welcomeModalShown", "true");
  }, 3000);
});