// import { ValuesController } from "./Controllers/ValuesController.js";

import { BackgroundsController } from "./Controllers/BackgroundsController.js";
import { ListsController } from "./Controllers/ListsController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { WeathersController } from "./Controllers/WeathersController.js";
import { ClocksController } from "./Controllers/ClocksController.js";

class App {
  // valuesController = new ValuesController();
  
  listsController = new ListsController()

  backgroundsController = new BackgroundsController()

  quotesController = new QuotesController()

  weathersController = new WeathersController()

  clocksController = new ClocksController()
  
}

window["app"] = new App();
