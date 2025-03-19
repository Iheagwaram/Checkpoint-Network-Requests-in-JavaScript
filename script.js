async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '2d24d2dcc6903ab4934c1f528257ee'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        document.getElementById('weather-info').innerHTML = `
            <p>Location: ${data.name}, ${data.sys.country}</p>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        document.getElementById('weather-info').innerHTML = `<p>${error.message}</p>`;
    }
}
