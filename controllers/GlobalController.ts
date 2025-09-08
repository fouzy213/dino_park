import {Controller} from "../libs/Controller"
export class GlobalController extends Controller {

public homePage(){


     this.response.render("homepage", {});
  }
}
    
    