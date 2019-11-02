import express = require("express");
import { UserRoute } from "./routes";
const cors = require("cors");

class App {
  app: express.Application = express();
  public setUpMiddlewares() {
    this.app.use(cors());
  }
  public setUpRotes() {
    UserRoute.getRoutes(this.app);
  }

  public listenOn(port?: number) {
    this.app.listen(process.env.PORT || port);
  }
  public startApp() {
    this.setUpMiddlewares();
    this.setUpRotes();
    this.listenOn(3000);
  }
}

const app = new App();
app.startApp();
