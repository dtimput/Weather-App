import { location, temperature, feelsLike, wind, humidity } from "./domHandler";

async function getWeatherData() {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=36.250947&lon=-115.1700&appid=58445913d230f47d9c9cdbb2f0ccb615"
    );
    console.log(response);
    const data = await response.json();
    console.log(data);
    temperature.textContent = `${Math.round(data.main.temp)}°F`;
    feelsLike.textContent = `Feels like: ${Math.round(data.main.feels_like)}°F`;
    wind.textContent = `Wind: ${data.wind.speed} MPH`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
  } catch (err) {
    console.log(err);
  }
}

export default getWeatherData;
