export class Weather{

  constructor(data) {
    this.temp = data.main.temp
    this.conditions = data.weather[0].description
    this.location = data.name
    this.icon = data.weather[0].icon
  }

  get iconTemplate() {
    return /*html*/`
  <img src="https://openweathermap.org/img/wn/${this.icon}.png" alt="weather icon" id="weathericon">`
  }
}