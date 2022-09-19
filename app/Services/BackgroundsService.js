import { appState } from "../AppState.js"
import { BackgroundPic } from "../Models/BackgroundPic.js"
import { sandboxServer } from "./AxiosService.js"

class BackgroundsService{

  async getBackgroundPicture() {
    const res = await sandboxServer.get('/api/images', {
      params: {
        category:'jellyfish'
      }
    })
    appState.backgroundPic = new BackgroundPic(res.data)
    
  }


} 

export const backgroundsService = new BackgroundsService