// Get a reference to the weather map container
const mapContainer = L.map('weather-map').setView([54.702, -3.276], 6); // Set the initial view

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(mapContainer);

// Define the location for which you want to fetch weather data (e.g., London, UK)
const city = 'London';
const country = 'UK';

// Replace 'YOUR_OPENWEATHERMAP_API_KEY' with your actual OpenWeatherMap API key
const apiKey = 'adb3403328844831978164251a5ce75b';

// Construct the API URL to fetch weather data
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;

// Fetch weather data from the OpenWeatherMap API
fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        // Process the weather data and add markers or layers to the map
        // Example: Display temperature and description on the map
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;

        L.marker([54.702, -3.276]).addTo(mapContainer)
            .bindPopup(`Temperature: ${temperature}&deg;C<br>${weatherDescription}`);
    });
