document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('eventModal');
    var span = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.view-event-btn').forEach(function(button) {
      button.onclick = function() {
        var eventId = this.id.split('viewEvent')[1]; 
        showModal(eventId);
      }
    });

    span.onclick = function() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    function showModal(eventId) {
      var title = document.getElementById('eventTitle');
      var date = document.getElementById('eventDate');
      var description = document.getElementById('eventDescription');

      if (eventId === '1') {
        title.innerHTML = 'Event Title 1';
        date.innerHTML = 'January 5, 2024';
        description.innerHTML = 'Details about Event 1...';
      } else if (eventId === '2') {
        title.innerHTML = 'Event Title 2';
        date.innerHTML = 'February 23, 2024';
        description.innerHTML = 'Details about Event 2...';
      } else if (eventId === '3') {
        title.innerHTML = 'Event Title 3';
        date.innerHTML = 'March 27, 2024';
        description.innerHTML = 'Details about Event 3...';
      }
      modal.style.display = "block";
    }
  });