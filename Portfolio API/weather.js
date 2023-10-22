// Get a reference to the weather map container
const mapContainer = L.map('weather-map').setView([51.505, -0.09], 5); // Set the initial view

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(mapContainer);

// Fetch weather data from the API (replace with the actual API endpoint)
const apiUrl = 'YOUR_WEATHER_API_ENDPOINT';
fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        // Process the weather data and add markers or layers to the map
        // Example: Loop through data and add markers for each location
        data.locations.forEach((location) => {
            L.marker([location.lat, location.lon]).addTo(mapContainer)
                .bindPopup(`Temperature: ${location.temperature}&deg;C<br>${location.weatherDescription}`);
        });
    });
