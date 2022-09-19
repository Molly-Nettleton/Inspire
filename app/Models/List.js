import { appState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class List {

  constructor(data) {
    this.id = data.id 
    this.description = data.description
    this.user = data.user
    this.completed = data.completed || false
}

  get ListItemTemplate() {
    return /*html*/`
              <div class="d-flex justify-content-between">
              
                <input type="checkbox" onchange="app.listsController.toggleListItem('${this.id}')" class="form-check-input"
                  ${this.completed ? 'checked' : '' }  name="completed">

                  <div class="list-item text rounded px-4">
${this.description}</div>

                <i onclick="app.listsController.deleteListItem('${this.id}')" class="mdi mdi-close selectable"></i>
              </div><br>`
  }
  
  
}