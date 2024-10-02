
const form = document.getElementById('partnerForm');
const modal = document.getElementById('thankYouModal');
const closeModalBtn = document.querySelector('.close-btn');


form.addEventListener('submit', function(event) {
    event.preventDefault();

   
    modal.style.display = 'block';

    form.reset();

    setTimeout(function() {
        modal.style.display = 'none';
        window.location.href = '../index.html';
    }, 2000); 
});


closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});


window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none'; 
    }
});
