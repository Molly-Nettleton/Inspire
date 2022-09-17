import { appState } from "../AppState.js";
import { sandboxServer } from "../Services/AxiosService.js";
import { listsService } from "../Services/ListsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML} from "../Utils/Writer.js";
import { Pop } from "../Utils/Pop.js"

function _drawListItems() {
   let template = ''
   appState.lists.forEach(l => template += l.ListItemTemplate)
   setHTML('list-items', template)
}
  
export class ListsController{

  constructor()
  {
    appState.on('lists', _drawListItems)
    this.getListItems()
  }
  async getListItems() {
    try {
      await listsService.getListItems()
    } catch (error) {
      console.log('Create list item error:', error);
    }
  }

  async addListItems(formData) {
  try {
    window.event.preventDefault()
    const form = window.event.target
    let formData = getFormData(form)
    await listsService.addListItems(formData)
    
    } catch (error) {
      console.log('[addListItems]', error);
    }
}

  async deleteListItem(id) {
    try {
      const yes = await Pop.confirm('remove?')
      if (!yes) { return }
      console.log("List item removed.")
      await listsService.deleteListItem(id)
    } catch (error) {
      console.error('[Delete List Item Error]', error)
    }
  }

  async toggleListItem(id) {
    console.log("List Item Toggled!")
    try { await listsService.toggleListItem(id)
  
    } catch (error) {
      console.error('[ToggleListItem]', error)
}
  }
}