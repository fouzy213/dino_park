import {Controller} from "../libs/Controller"
import { ReservationRepository } from "../repositories/ReservationRepository";
export class FormController extends Controller {



public creatForm(){
    this.response.render("form.ejs")    
}

public async submitForm() {
  try {

    const { dateInput, adult, child, senior, id_user } = this.request.body;


    const total =
      parseInt(adult) * 45 +
      parseInt(child) * 35 +
      parseInt(senior) * 40;

      // Création de la réservation
      const id_user0 = 1;
      const reservationRepo = new ReservationRepository();
    const reservations = await reservationRepo.ajouterReservation(dateInput, total,id_user0  );

    // Passer les données à la vue récapitulative
  this.response.render("recap.ejs", {
  reservations,
  total,
  date: dateInput,
  adult,
  child,
  senior,
  email: this.request.body.email,
  phone: this.request.body.phone,
});


  } catch (error) {
    console.error("Erreur lors de la soumission du formulaire :", error);
    this.response.status(500).send("Erreur serveur");
  }
}

}
