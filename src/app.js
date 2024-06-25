function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let searchedCity = searchInput.value;
  getWeatherInformation(searchedCity);
}

let searchInformationForm = document.querySelector("#search-form");
searchInformationForm.addEventListener("submit", searchCity);

function getWeatherInformation(searchedCity) {
  let city = searchedCity;
  let apiKey = "b4f4f04bo5dd852da90t46443578a31a";
  let unit = "metric";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(displayWeatherInformation);
}
getWeatherInformation("San Francisco");

function displayWeatherInformation(response) {
  let cityElement = document.querySelector("#default-city");
  cityElement.innerHTML = response.data.city;
  if (cityElement.innerHTML === "New York County") {
    cityElement.innerHTML = "New York City";
  }

  let currentTemperature = Math.round(response.data.temperature.current);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = currentTemperature;
}

let currentDate = new Date();

function formatDate(date) {
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDayOfWeek = weekDays[date.getDay()];

  let currentHour = date.getHours();
  if (currentHour < 10) {
    console.log(currentHour);
    currentHour = `0${currentHour}`;
  }

  let currentMinutes = date.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  let formatedDate = `${currentDayOfWeek} ${currentHour}:${currentMinutes}`;
  return formatedDate;
}

function displayCurrentTime(formatedDate) {
  let defaultTime = document.querySelector("#default-time");
  defaultTime.innerHTML = formatedDate;
}

displayCurrentTime(formatDate(currentDate));
