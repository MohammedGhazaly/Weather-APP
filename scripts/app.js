const input = document.querySelector("#city");
const cityForm = document.querySelector("form");
const cityName = document.querySelector(".city-name");
const weatherCondition = document.querySelector(".weather-condition");
const tempratureValue = document.querySelector(".temprature-value");
const card = document.querySelector(".card");
const timeImg = document.querySelector(".time-img");
const iconImg = document.querySelector(".icon-img");
const label = document.querySelector("label");

const updateUI = function (data) {
  const cityDetails = data.cityDetails;
  const cityWeather = data.cityWeather;
  // Get the City name, the weather condition & the temprature in C
  cityName.innerHTML = cityDetails.EnglishName;
  weatherCondition.innerHTML = cityWeather.WeatherText;
  tempratureValue.innerHTML = cityWeather.Temperature.Metric.Value;
  console.log(cityWeather);
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
  // Change the Time image depending on the time of day
  if (cityWeather.IsDayTime === true) {
    timeImg.setAttribute("src", "./img/day.svg");
    document.body.style.backgroundColor = "#fff";
    label.style.color = "";
    iconImg.classList.add("day");
  } else {
    timeImg.setAttribute("src", "./img/night.svg");
    document.body.style.backgroundColor = "#313C51";
    label.style.color = "#fff";
    iconImg.classList.add("night");
  }

  // Update the weather icon according to the WeatherIcon value
  iconImg.setAttribute("src", `./img/icons/${cityWeather.WeatherIcon}.svg`);
};

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const cityWeather = await getWeather(cityDetails.Key);
  //   console.log(weather);
  return {
    cityDetails: cityDetails,
    cityWeather: cityWeather,
  };
};

cityForm.addEventListener("submit", (e) => {
  // Prevent the default behavour of the form
  e.preventDefault();
  const city = input.value;
  cityForm.reset();
  //Call the updateCity() function that calls the two promises getCity() & getWeather()
  //then return an object to update the UI using updateUI() function
  updateCity(city)
    .then((data) => updateUI(data))
    .catch((error) => {
      console.log(error);
    });
});
