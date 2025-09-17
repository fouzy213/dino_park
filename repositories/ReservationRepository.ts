import { Repository } from "../libs/Repository";
import { Reservation } from "../models/Reservation";

export class ReservationRepository extends Repository {

  async ajouterReservation(
    date_de_visite: string,
    prix: number,
    id_user: number
  ): Promise<Reservation[]> {
    const query = `
      INSERT INTO reservation (date_reservation, date_de_visite, prix, id_user)
      VALUES (NOW(), $1, $2, $3)
      RETURNING *;
    `;

    try {
   
      const values = [date_de_visite, prix, id_user];

      const result = await this.pool.query(query, values);

      return result.rows.map((row) => Reservation.fromRow(row));
    } catch (error) {
      console.error("Erreur lors de l'ajout de la réservation :", error);
      return [];
    }
  }
}
