let selectedCity = "saint-saulve";
receiveTemperature(selectedCity);

let changeCityButton = document.querySelector('#change-city');
changeCityButton.addEventListener('click', () => {
  selectedCity = prompt('Which city would you like to see?');
  receiveTemperature(selectedCity);
});

function receiveTemperature(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric`;

  let request = new XMLHttpRequest(); // Create a new XMLHttpRequest object
  request.open('GET', url); // Set up the request
  request.responseType = 'json'; // Expect JSON response
  request.send(); // Send the request

  // Handle the response when received
  request.onload = function() {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        let response = request.response;
        let temperature = response.main.temp;
        let city = response.name;
        document.querySelector('#temperature_label').textContent = temperature;
        document.querySelector('#city').textContent = city;
      }
      else {
        alert('There was a problem, please try again later.');
      }
    }
  }
}
