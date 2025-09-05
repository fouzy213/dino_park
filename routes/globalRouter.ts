import { Router } from "express";
import { GlobalController } from "../controllers/GlobalController";
// Initialiastion du bookRouter Express
const globalRouter = Router();

globalRouter.get("/", (request, response) => {
  const controller = new GlobalController(request, response);
  controller.homePage();
});
export default globalRouter;
