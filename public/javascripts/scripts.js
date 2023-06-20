console.log('scripts.js loaded');

if (document.querySelector('#new-pet')) {
  console.log('new pet page')
  document.querySelector('#save-button').addEventListener('click', (e) => {
      console.log('submitting form')
      e.preventDefault();

      let pet = {};
      const inputs = document.querySelectorAll('.form-control');
      for (const input of inputs) {
          pet[input.name] = input.value;
      }

      axios.post('/pets', pet)
      .then(function (response) {
        window.location.replace(`/pets/${response.data._id}`);
      })
      // New Catch Code
      .catch(function (error) {
        const alert = document.getElementById('alert')
        alert.classList.add('alert-warning');
        alert.textContent = 'Oops, something went wrong saving your pet. Please check your information and try again.';
        alert.style.display = 'block';
      });
  });
}
