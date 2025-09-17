import { Router } from "express";
import { FormController } from "../controllers/FormController";

const formRouter = Router();
formRouter.get("/form",(req,res)=>{
const controller = new FormController(req,res);
controller.creatForm();

formRouter.post("/reservation", (req, res) => {
  const controller = new FormController(req, res);
  controller.submitForm();
});

});
export default formRouter