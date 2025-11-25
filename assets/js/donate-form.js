window.onload = function () {
  document.getElementById('print').addEventListener('click', () => {
    const a = document.getElementById('donationSummary').cloneNode(true);
    const downloadButton = a.querySelector('#print');
    if (downloadButton) {
      downloadButton.remove();
    }

    var opt = {
      margin: 0.7,
      filename: 'receipt.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    var now = new Date();
    var dateString = now
      .toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
      .split('/')
      .join('-');
    var timeString = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    const content = `
      <div style="text-align: center;margin-bottom: -15px; font-family: Ubuntu;font-weight: bold; font-size:xx-large;">Receipt</div>
      <div style="position: absolute; top: 10px; right: 10px; font-size: xx-small;">
        <div>${dateString} ${timeString}</div>
      </div>
      <p>____________________________________________________________________________________________</p>
      <div>${a.innerHTML}</div>
      <p> ____________________________________________________________________________________________</p>
    `;

    html2pdf().from(content).set(opt).save();
  });
};

$('#donationType').on('change', function () {
  if ($(this).val() === 'recurring') {
    $('#recurringOptions').slideDown();
  } else {
    $('#recurringOptions').slideUp();
  }
});

$('#donationForm').on('submit', function (event) {
  event.preventDefault();

  const donationType = $('#donationType').val();
  const amount = $('#amount').val();
  const frequency = $('#frequency').val();
  const paymentMethod = $('#paymentMethod').val();
  const name = $('#name').val();
  const email = $('#email').val();
  const isAnonymous = $('#anonymous').is(':checked') ? 'Yes' : 'No';

  $('#summaryType').text(donationType === 'recurring' ? 'Recurring' : 'One-Time');
  $('#summaryAmount').text(amount);
  $('#summaryPaymentMethod').text(paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1));
  $('#summaryName').text(name);
  $('#summaryEmail').text(email);
  $('#summaryAnonymous').text(isAnonymous);

  if (donationType === 'recurring') {
    $('#summaryFrequencyContainer').show();
    $('#summaryFrequency').text(frequency.charAt(0).toUpperCase() + frequency.slice(1));
  } else {
    $('#summaryFrequencyContainer').hide();
  }

  $('#donationSummary').slideDown();
});

$('#name').on('input', function () {
  var nameInput = $(this).val();
  if (!nameInput.match(/^[a-zA-Z\s]+$/)) {
    $('#name-error').show();
  } else {
    $('#name-error').hide();
  }
});
