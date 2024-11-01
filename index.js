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