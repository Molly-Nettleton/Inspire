import { setHTML } from "../Utils/Writer.js";

function _setTime() {
  let today = new Date();
  let clock = today.getHours() + ":" + today.getMinutes().toString().padStart(2,'0');

  setHTML('clock', clock)
}

export class ClocksController{
  constructor() {
  setInterval(_setTime, 1000)
  }


}