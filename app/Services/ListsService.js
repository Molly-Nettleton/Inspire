import { appState } from "../AppState.js"
import { List } from "../Models/List.js"
import { sandboxServer } from "./AxiosService.js"

class ListsService {

  async getListItems() {
    const res = await sandboxServer.get(`/api/${appState.user}/todos`)
    appState.lists = res.data.map(l => new List(l))
  }

  async addListItems(formData) {
    const res = await sandboxServer.post(`/api/${appState.user}/todos`, formData)
    console.log(res.data)
    let list = new List(res.data)
    appState.lists = [list, ...appState.lists]
  
}
  async deleteListItem(id) {
    await sandboxServer.delete(`/api/${appState.user}/todos/${id}`)
    appState.lists = appState.lists.filter(l => l.id != id)
  }

  async toggleListItem(id) {
    const item = appState.lists.find(l => l.id == id)
    if (!item) {
      throw new Error('BAD.')
    }
    item.completed = !item.completed
    await sandboxServer.put(`/api/${appState.user}/todos/${id}`, item)
    appState.emit('lists')
  }
}
export const listsService = new ListsService()