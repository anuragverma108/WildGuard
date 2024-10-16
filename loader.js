// Hide loader after 1 seconds
window.onload = function() {
  setTimeout(() => {
    document.querySelector('.loader-container').style.display = 'none';
  }, 6000);
};