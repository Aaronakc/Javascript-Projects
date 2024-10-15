const searchButton = document.getElementById('search');
const temperature = document.querySelector('.detail h1');
const humidity = document.querySelector('#humidity');
const windSpeed = document.querySelector('#wind-speed')
const weatherImages = document.querySelector('.weather-img img')
const cityName = document.querySelector('.search input');
const cityValue=document.querySelector('#city-name');
const displayAll=document.querySelector('.weather-info')

const apiKey = prompt('Enter your api key for the site');

async function getWeatherInfo(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&${apiKey}`);
  const result = await response.json();
  console.log(result);

  temperature.innerHTML = Math.round(result.main.temp - 273) + ' °C';
  humidity.innerHTML = result.main.humidity+ ' %';
  windSpeed.innerHTML = result.wind.speed + ' Km/hr';
  cityValue.innerHTML=city;

  if (result.weather[0].main == 'Rain') {
    weatherImages.src = "./images/rain.png"
  }
  else if (result.weather[0].main == 'Clouds') {
    weatherImages.src = "./images/clouds.png"
  }
  else if (result.weather[0].main == 'Snow') {
    weatherImages.src = "./images/snow.png"
  }
  else if (result.weather[0].main == 'Wind') {
    weatherImages.src = "./images/wind.png"
  }
  else if (result.weather[0].main == 'Mist') {
    weatherImages.src = "./images/mist.png"
  }
  else {
    weatherImages.src = "./images/clear.png"
  }


}
 
searchButton.addEventListener('click', () => {
  city = cityName.value
  getWeatherInfo(city);
  displayAll.style.display='block';
})
document.querySelector('.search input')
  .addEventListener('change', () => {
    city = cityName.value
    getWeatherInfo(city);
    displayAll.style.display='block';
})
