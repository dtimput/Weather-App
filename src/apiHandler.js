// eslint-disable-next-line import/no-cycle
import {
  location,
  temperature,
  feelsLike,
  wind,
  humidity,
  error,
} from "./domHandler";

async function getWeatherData(apiLink) {
  try {
    error.textContent = " ";
    const response = await fetch(apiLink);
    const data = await response.json();
    location.textContent = `${data.name}, ${data.sys.country}`;
    temperature.textContent = `${Math.round(data.main.temp)}°F`;
    feelsLike.textContent = `Feels like: ${Math.round(data.main.feels_like)}°F`;
    wind.textContent = `Wind: ${data.wind.speed} MPH`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
  } catch (err) {
    error.textContent = "Unable to locate city";
    console.log(err);
  }
}

function updateAPI(modifiedInput) {
  const apiLink = `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${modifiedInput}&APPID=58445913d230f47d9c9cdbb2f0ccb615`;
  getWeatherData(apiLink);
}
function handleUserInput(userInput) {
  const input = userInput;
  const modifiedInput = input.replace(/ /g, "%20");
  updateAPI(modifiedInput);
}

export { getWeatherData, handleUserInput };
