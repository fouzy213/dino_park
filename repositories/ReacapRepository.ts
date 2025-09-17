import { Repository } from "../libs/Repository";
import { Reservation } from "../models/Reservation";


export class RecapRepository extends Repository{

    async afficherRecap(
    
  ): Promise<Reservation[]>
   {
    const query = ` SELECT * FROM reservation`;

    try {
      const result = await this.pool.query(query);
      return result.rows.map((row) => Reservation.fromRow(row));
    } catch (error) {
     
      return [];
    }
  }}