import { Repository } from "../libs/Repository";
import { Dino } from "../models/Dinosaure";

export class DinoRepository extends Repository {

  async findDinosByRegime(regime: string): Promise<Dino[]> {
    const query = {
      name: "fetch-dinos-by-regime",
      text: "SELECT * FROM Dinosaures WHERE Regime = $1",
      values: [regime],
    };

    try {
      const result = await this.pool.query(query);
      return result.rows.map((row) => Dino.fromRow(row));
    } catch (error) {
     
      return [];
    }
  }
}
