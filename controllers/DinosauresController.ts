import { DinoRepository } from "../repositories/DinoRepository";
import { Controller } from "../libs/Controller";
import { Request, Response } from "express";


export class DinosauresController extends Controller {
  private dinoRepository: DinoRepository;

  constructor(request: Request, response: Response) {
    super(request, response);
    this.dinoRepository = new DinoRepository();
  }

  public async browseDino() {
    try {
      const regime = this.request.params.regime; 
      const dinos = await this.dinoRepository.findDinosByRegime(regime);


      this.response.render("regime.ejs", { dinos ,  url: this.request.originalUrl });
    } catch (error) {
      console.error("Erreur lors de la récupération des dinos :", error);
      this.response.status(500).send("Erreur serveur");
    }
  }
}


