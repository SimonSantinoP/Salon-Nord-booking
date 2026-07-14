const form = document.getElementById('booking-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  status.textContent = 'Sender...';

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      status.textContent = 'Tak! Din tid er sendt — vi bekræfter snarest på mail.';
      form.reset();
    } else {
      status.textContent = 'Der gik noget galt. Prøv igen, eller ring til os.';
    }
  } catch (err) {
    status.textContent = 'Der gik noget galt. Tjek din internetforbindelse og prøv igen.';
  }
});
