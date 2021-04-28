import Model from './model.js';
import View from './view.js';

export default class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View(this.handleWeatherSearch);
  }

  handleWeatherSearch = (city) => {
    this.model.load(city)
      .then(data => this.view.renderWeather(data));
  }
}