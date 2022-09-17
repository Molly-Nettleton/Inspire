export class Weather{

  constructor(data) {
    this.temp = data.main.temp
    this.conditions = data.weather.main
    this.location = data.name
  }
}