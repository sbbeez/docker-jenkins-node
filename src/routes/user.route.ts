import { Application } from "express";
import { UserController } from "../controllers";

export class UserRoute {
  public static getRoutes(app: Application) {
    app.get("/user/:id", UserController.getUser);
  }
}
