// eslint-disable-next-line import/no-cycle
import { handleUserInput } from "./apiHandler";

const location = document.querySelector("#location");
const temperature = document.querySelector("#temperature");
const feelsLike = document.querySelector("#feels-like");
const wind = document.querySelector("#wind");
const humidity = document.querySelector("#humidity");
const description = document.querySelector("#description");
const high = document.querySelector("#high");
const low = document.querySelector("#low");
const form = document.querySelector(".form");
const searchBar = document.querySelector("#search");
const error = document.querySelector(".error");

function getUserInput(event) {
  event.preventDefault();
  const userInput = searchBar.value;
  handleUserInput(userInput);
  searchBar.value = "";
}

form.addEventListener("submit", getUserInput);

export {
  location,
  temperature,
  feelsLike,
  wind,
  humidity,
  description,
  high,
  low,
  error,
  getUserInput,
};
