import express, { Router } from "express";
import globalRouter from "./globalRouter";
import dinoRouter from "./dinoRouter";

const router = Router();

router.use(globalRouter);
router.use(dinoRouter)
//Initialization du router express

//déclaration de la route home


router.get('/recherche', (request, response) => {
  response.send("Bienvenue sur recherche !");
  });


export default router;