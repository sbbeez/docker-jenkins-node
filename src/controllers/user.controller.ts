import { Request, Response } from "express";

export class UserController {
  public static getUser(req: Request, res: Response) {
    res.send({ message: "some message for testing" });
  }
}
