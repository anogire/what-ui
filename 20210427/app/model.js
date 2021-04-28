export default class Model {
  url = 'http://api.openweathermap.org/data/2.5/';
  apiKey = '29ffe69d195da7354ebe7f9b4280e772';

  async load(city) {
    const cityUrl = `${this.url}weather?q=${city}&appid=${this.apiKey}`;
    try {
      const res = await fetch(cityUrl).then(res => res.json());
      return res;
    } catch (err) {
      console.log(err);
    }
  }
}