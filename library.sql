CREATE TABLE utilisateur(
   Id_User INT,
   user_name VARCHAR(50) NOT NULL,
   lastname VARCHAR(50) NOT NULL,
   password INT NOT NULL,
   PRIMARY KEY(Id_User),
   UNIQUE(password)
);

CREATE TABLE Reservation(
   Id_Reservation INT,
   date_reservation DATETIME,
   date_de_visite DATE,
   prix VARCHAR(50),
   Id_User INT NOT NULL,
   PRIMARY KEY(Id_Reservation),
   FOREIGN KEY(Id_User) REFERENCES utilisateur(Id_User)
);

CREATE TABLE Dinosaures(
   Id_Dinosaures COUNTER,
   Regime VARCHAR(50) NOT NULL,
   Name_ VARCHAR(50) NOT NULL,
   Description VARCHAR(50) NOT NULL,
   PRIMARY KEY(Id_Dinosaures)
);

CREATE TABLE Type_billet(
   Id_Type_billet INT,
   name VARCHAR(50) NOT NULL,
   prix INT NOT NULL,
   quantiter INT,
   PRIMARY KEY(Id_Type_billet)
);

CREATE TABLE proposer(
   Id_Reservation INT,
   Id_Type_billet INT,
   PRIMARY KEY(Id_Reservation, Id_Type_billet),
   FOREIGN KEY(Id_Reservation) REFERENCES Reservation(Id_Reservation),
   FOREIGN KEY(Id_Type_billet) REFERENCES Type_billet(Id_Type_billet)
);

CREATE TABLE autoriser(
   Id_Dinosaures INT,
   Id_Type_billet INT,
   PRIMARY KEY(Id_Dinosaures, Id_Type_billet),
   FOREIGN KEY(Id_Dinosaures) REFERENCES Dinosaures(Id_Dinosaures),
   FOREIGN KEY(Id_Type_billet) REFERENCES Type_billet(Id_Type_billet)
);
