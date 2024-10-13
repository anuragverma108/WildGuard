const backToTopButton = document.getElementById('btn-back-to-top');
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});