export default class View {

  constructor(handleWeatherSearch) {

    document.querySelector('.btn-weather-search').addEventListener('click', function () {
      const city = document.querySelector('#city');
      handleWeatherSearch(city.value);
    });

  }

  renderWeather(data) {
    this.clearData();
    if (!data) {
      document.querySelector('.weather__city').textContent = "No data";
      return;
    }
    const {
      name,
      weather,
      sys: { country },
      main: { temp }
    } = data;

    document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${weather[0]['icon']}@2x.png">`;
    document.querySelector('.weather__city').textContent = `${name}, ${country}`;
    document.querySelector('.weather__temp').innerHTML = `${Math.round(temp - 273)}&deg`;
    document.querySelector('.weather__desc').textContent = weather[0]['description'];
  }

  clearData() {
    document.querySelector('#city').value = '';
    document.querySelector('.weather__city').textContent = '';
    document.querySelector('.weather__temp').innerHTML = '';
    document.querySelector('.weather__desc').textContent = '';
    document.querySelector('.weather__icon').innerHTML = '';
  }
}