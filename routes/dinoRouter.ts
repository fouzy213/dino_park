import  { Router } from "express";
import { DinosauresController } from "../controllers/DinosauresController";

const dinoRouter = Router();
dinoRouter.get("/dinos/:regime", (req, res) => {
  const controller = new DinosauresController(req, res);
  controller.browseDino();
});
export default dinoRouter;
