  //active Ticket purchasing button
  document.addEventListener("DOMContentLoaded", function() {
    const buyTicketButton = document.getElementById('Purchase-Ticket');
    const ticketsAvailableElement = document.getElementById('tickets-available');
    let ticketsAvailable = parseInt(ticketsAvailableElement.textContent);
  
    buyTicketButton.addEventListener('click', function() {
      if (ticketsAvailable > 0) {
        ticketsAvailable--;
        ticketsAvailableElement.textContent = ticketsAvailable;
        alert('Ticket purchased successfully!');
      } else {
        alert('Sorry, this showing is sold out.');
      }
    });
  });
  
  //commented out this optional list because i created my own movie list and poster but this is how i did it.
  // //movie menu display and user interactivity
  // document.addEventListener("DOMContentLoaded", function() {
  //   const filmsList = document.getElementById('films');
  
  //   // Make a GET request to retrieve film data
  //   fetch('http://localhost:3000/films')
  //     .then(response => response.json())
  //     .then(data => {
  //       // Remove the placeholder li element
  //       filmsList.innerHTML = '';
  
  //       // Populate the films list
  //       data.forEach(film => {
  //         const filmItem = document.createElement('li');
  //         filmItem.classList.add('film-item');
  //         filmItem.textContent = film.title;
  //         filmsList.appendChild(filmItem);
  //       });
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
  // });
  

//Countdown for ticket purchase
document.addEventListener("DOMContentLoaded", function() {
  const countdownDate = new Date('2024-12-31T23:59:59').getTime(); // Change the date to your desired deadline

  const timerElement = document.getElementById('timer');

  const updateTimer = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance <= 0) {
      timerElement.textContent = 'Time is up!';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  setInterval(updateTimer, 1000);
  updateTimer(); // Initial call to display timer immediately
});
