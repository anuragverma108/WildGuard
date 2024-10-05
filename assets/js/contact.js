document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name && email && message) {
      // Show the success modal
      var successModal = new bootstrap.Modal(document.getElementById('successModal'));
      successModal.show();
      document.getElementById('contactForm').reset();
    }
  });