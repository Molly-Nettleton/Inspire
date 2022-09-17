import { appState } from "../AppState.js";
import { backgroundsService } from "../Services/BackgroundsService.js";
import { setText } from "../Utils/Writer.js";


function _drawBackgroundImage() {
  let bgpic = appState.backgroundPic
  document.querySelector('body').style.backgroundImage =`url(${bgpic.largeImgUrl})`
  setText('trademark-place', bgpic.author) 
}

export class BackgroundsController {

  constructor(){
    this.getBackgroundPicture()
    appState.on('backgroundPic', _drawBackgroundImage)
  }

  async getBackgroundPicture() {
    try {
      await backgroundsService.getBackgroundPicture()
    } catch (error) {
      console.error('[getBackgroundPicture]', error)
    }
  }
}