import { setHTML } from "../Utils/Writer.js";

function _setTime() {
  // let today = new Date();
  // let clock = today.getHours() + ":" + today.getMinutes().toString().padStart(2,'0') + ":" + today.getSeconds().toString().padStart(2,'0')
  const str = new Date().toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second:'numeric',
    hour12: true
  })
  
  const dt = new Date().toLocaleString('en-US', {
    day: 'numeric',
    month: 'numeric',
  })

  setHTML('clock', str)
  setHTML('date', dt)
}

export class ClocksController{
  constructor() {
  setInterval(_setTime, 1000)
  }


}