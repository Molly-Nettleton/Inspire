import { appState } from "../AppState.js"
import { quotesService } from "../Services/QuotesService.js"
import { setHTML, setText } from "../Utils/Writer.js"

  function _drawQuote() {
    let quote = appState.quote
    setText('quote-content', quote.content)
    setText('quote-author', quote.author)

}
  
export class QuotesController {

  constructor() {
    this.getQuote()
    appState.on('quote', _drawQuote)
  }
  
  async getQuote() {
    try {
      await quotesService.getQuote()
    } catch (error) {
      console.error('[getQuote]', error)
    }
  }

}