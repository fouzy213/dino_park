import { Request, Response } from "express";

export class GlobalController {
  protected request: Request;
  protected response: Response;

  constructor(request: Request, response: Response) {
    this.request = request;
    this.response = response;
  }
public homePage(){


     this.response.render("homepage", {});
  }
}
    
    