export default class View {

  constructor(handleWeatherSearch) {

    this.enterCity = document.querySelector('#city');
    this.city = document.querySelector('.weather__city');
    this.icon = document.querySelector('.weather__icon');
    this.temp = document.querySelector('.weather__temp');
    this.desc = document.querySelector('.weather__desc');

    document.querySelector('.btn-weather-search')
      .addEventListener('click', () => handleWeatherSearch(this.enterCity.value));
  }

  renderWeather(data) {
    this.clearData();
    if (!data) {
      this.city.textContent = "No data";
      return;
    }
    const {
      name,
      weather,
      sys: { country },
      main: { temp }
    } = data;

    this.icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${weather[0]['icon']}@2x.png">`;
    this.city.textContent = `${name}, ${country}`;
    this.temp.innerHTML = `${Math.round(temp - 273)}&deg`;
    this.desc.textContent = weather[0]['description'];
  }

  clearData() {
    this.enterCity.value = '';
    this.city.textContent = '';
    this.temp.innerHTML = '';
    this.desc.textContent = '';
    this.icon.innerHTML = '';
  }
}