export interface ReservationType {
  id: number | null;
  date_reservation: string;
  date_de_visite: string;
  prix: number;
  name_: string;
  dino_description: string;
  id_user: number;
}

export class Reservation {
  protected id: number | null;
  protected date_reservation: string;
  protected date_de_visite: string;
  protected prix: number;
  protected name_: string;
  protected dino_description: string;
  protected id_user: number;

  constructor(
    id: number | null,
    date_reservation: string,
    date_de_visite: string,
    prix: number,
    name_: string,
    dino_description: string,
    id_user: number
  ) {
    this.id = id;
    this.date_reservation = date_reservation;
    this.date_de_visite = date_de_visite;
    this.prix = prix;
    this.name_ = name_;
    this.dino_description = dino_description;
    this.id_user = id_user;
  }

  static fromRow(row: ReservationType): Reservation {
    return new Reservation(
      row.id,
      row.date_reservation,
      row.date_de_visite,
      row.prix,
      row.name_,
      row.dino_description,
      row.id_user
    );
  }
}
