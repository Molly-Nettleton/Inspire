import { appState } from "../AppState.js"
import { weathersService } from "../Services/WeathersService.js"
import { setHTML, setText } from "../Utils/Writer.js"

function _drawWeather() {
  let weather = appState.weather
  setText('temp', weather.temp)
  setText('conditions', weather.conditions)
  setText('location', weather.location)
}

export class WeathersController{

  constructor() {
    console.log("Hello from the Weather Controller!")
    this.getWeather()
    appState.on('weather', _drawWeather)
  }

  async getWeather() {
    try {
      await weathersService.getWeather()
    }catch (error) {
      console.error('[getWeather]', error)
    }
  }
}