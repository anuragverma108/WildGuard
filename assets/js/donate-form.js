const donationForm = document.getElementById('donationForm');
const donationType = document.getElementById('donationType');
const amount = document.getElementById('amount');
const frequency = document.getElementById('frequency');
const paymentMethod = document.getElementById('paymentMethod');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const anonymousCheckbox = document.getElementById('anonymous');
const donationSummary = document.getElementById('donationSummary');
const summaryType = document.getElementById('summary-type');
const summaryAmount = document.getElementById('summary-amount');
const summaryFrequency = document.getElementById('summary-frequency');
const summaryPaymentMethod = document.getElementById('summary-payment-method');
const summaryName = document.getElementById('summary-name');
const summaryEmail = document.getElementById('summary-email');
const summaryAnonymous = document.getElementById('summary-anonymous');
const printButton = document.getElementById('print-button');
const recurringOptions = document.getElementById('recurringOptions');

donationType.addEventListener('change', () => {
  if (donationType.value === 'recurring') {
    recurringOptions.style.display = 'block';
  } else {
    recurringOptions.style.display = 'none';
    frequency.value = '';
  }
});

donationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (parseFloat(amount.value) <= 0) {
    alert('Please enter a valid donation amount greater than zero.');
    return;
  }

  summaryType.textContent =
    donationType.value === 'one-time'
      ? 'One-Time Donation'
      : 'Recurring Donation';
  summaryAmount.textContent = `${parseFloat(amount.value).toFixed(2)}`;
  summaryFrequency.textContent =
    donationType.value === 'recurring' ? frequency.value : 'N/A';
  summaryPaymentMethod.textContent = paymentMethod.value;
  summaryName.textContent = nameInput.value;
  summaryEmail.textContent = emailInput.value;
  summaryAnonymous.textContent = anonymousCheckbox.checked ? 'Yes' : 'No';

  donationSummary.style.display = 'block';
});

printButton.addEventListener('click', () => {
    const now = new Date();
    const dateString = now.toLocaleDateString('en-GB').split('/').join('-');
    const timeString = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  
    const content = `
      <div style="text-align: center; margin-bottom: 8px; font-family: 'Oswald', sans-serif; font-weight: bold; font-size: 26px; color: #2b7a3d;">WILDGUARD</div>
      <div style="text-align: right; font-size: 10px; margin-bottom: 10px;">
          <div>${dateString} ${timeString}</div>
      </div>
      <hr style="border: 1px solid #2b7a3d;">
      <div style="font-family: Arial, sans-serif; font-size: 14px; margin: 10px 0; text-align: center;">
          <strong style="color: #2b7a3d; font-size: 20px;">Thank You for Your Donation!</strong>
          <p style="font-size: 12px;">Your support helps us protect wildlife and their habitats.</p>
      </div>
      <div style="font-family: Arial, sans-serif; font-size: 12px; margin: 5px auto; width: 100%;">
          <table style="width: 100%; border-collapse: collapse; margin: 8px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border-radius: 5px; overflow: hidden;">
              <thead>
                  <tr style="background-color: #d4edda;">
                      <th style="border: 1px solid #ccc; padding: 8px; font-size: 12px; text-align: left;">Description</th>
                      <th style="border: 1px solid #ccc; padding: 8px; font-size: 12px; text-align: left;">Details</th>
                  </tr>
              </thead>
              <tbody>
                  <tr style="background-color: #f9f9f9;">
                      <td style="border: 1px solid #ccc; padding: 8px;">Type</td>
                      <td style="border: 1px solid #ccc; padding: 8px;">${summaryType.textContent || ''}</td>
                  </tr>
                  <tr>
                      <td style="border: 1px solid #ccc; padding: 8px;">Amount</td>
                      <td style="border: 1px solid #ccc; padding: 8px;">${summaryAmount.textContent || ''}</td>
                  </tr>
                  <tr style="background-color: #f9f9f9;">
                      <td style="border: 1px solid #ccc; padding: 8px;">Frequency</td>
                      <td style="border: 1px solid #ccc; padding: 8px;">${summaryFrequency.textContent || 'N/A'}</td>
                  </tr>
                  <tr>
                      <td style="border: 1px solid #ccc; padding: 8px;">Payment Method</td>
                      <td style="border: 1px solid #ccc; padding: 8px;">${summaryPaymentMethod.textContent || ''}</td>
                  </tr>
                  <tr style="background-color: #f9f9f9;">
                      <td style="border: 1px solid #ccc; padding: 8px;">Name</td>
                      <td style="border: 1px solid #ccc; padding: 8px;">${summaryName.textContent || ''}</td>
                  </tr>
                  <tr>
                      <td style="border: 1px solid #ccc; padding: 8px;">Email</td>
                      <td style="border: 1px solid #ccc; padding: 8px;">${summaryEmail.textContent || ''}</td>
                  </tr>
                  <tr style="background-color: #f9f9f9;">
                      <td style="border: 1px solid #ccc; padding: 8px;">Anonymous</td>
                      <td style="border: 1px solid #ccc; padding: 8px;">${summaryAnonymous.textContent || 'No'}</td>
                  </tr>
              </tbody>
              <tfoot>
                  <tr>
                      <td colspan="2" style="border: 1px solid #ccc; padding: 8px; text-align: center; background-color: #f8f9fa; font-weight: bold;">Thank you for your support!</td>
                  </tr>
              </tfoot>
          </table>
      </div>
      <hr style="border: 1px solid #2b7a3d;">
      <div style="font-family: Arial, sans-serif; font-size: 10px; text-align: center; margin-top: 10px;">
          <p>If you have any questions, feel free to contact us!</p>
          <p style="color: #2b7a3d; font-size: 12px;">WILDGUARD - Protecting Nature Together</p>
          <p style="color: #999;">Your donation is tax-deductible as allowed by law.</p>
      </div>
    `;
  
    const pdfContent = document.createElement('div');
    pdfContent.innerHTML = content;
  
    pdfContent.style.width = '100%';
    pdfContent.style.fontSize = '12px';
  
    const opt = {
      margin: [0.5, 0.5, 0.5, 0.5],
      filename: 'donation_receipt.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      html2canvas: { scale: 2 },
    };
  
    html2pdf().from(pdfContent).set(opt).save();
  });
  