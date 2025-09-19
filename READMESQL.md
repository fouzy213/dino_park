-- Supprimer les tables si elles existent
DROP TABLE IF EXISTS autoriser;
DROP TABLE IF EXISTS proposer;
DROP TABLE IF EXISTS reservation;
DROP TABLE IF EXISTS type_billet;
DROP TABLE IF EXISTS dinosaures;
DROP TABLE IF EXISTS utilisateur;

-- =====================
-- Table utilisateur
-- =====================
CREATE TABLE utilisateur (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL UNIQUE,
    lastname VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
);

INSERT INTO utilisateur (user_name, lastname, password)
VALUES ('kevin', 'gauthier', '0000');

-- =====================
-- Table reservation
-- =====================
CREATE TABLE reservation (
    id SERIAL PRIMARY KEY,
    date_reservation TIMESTAMP,
    date_de_visite DATE,
    prix NUMERIC(6,2),
    id_user INT NOT NULL,
    FOREIGN KEY (id_user) REFERENCES utilisateur(id)
);

-- =====================
-- Table dinosaures
-- =====================
CREATE TABLE dinosaures (
    id SERIAL PRIMARY KEY,
    regime VARCHAR(50) NOT NULL,
    name_ VARCHAR(50) NOT NULL,
    dino_description TEXT NOT NULL
);

INSERT INTO dinosaures (regime, name_, dino_description)
VALUES 
('terrien','Tyrannosaurus','Grand prédateur terrestre carnivore du Crétacé.'),
('terrien','Triceratops','Dino herbivore avec trois cornes sur le visage.'),
('terrien','Stegosaurus','Dino herbivore avec plaques dorsales caractéristiques.'),
('terrien','Brachiosaurus','Grand herbivore avec un long cou pour atteindre les arbres.'),
('aerien','Pteranodon','Ptérosaure volant avec une envergure impressionnante.'),
('aerien','Quetzalcoatlus','Un des plus grands reptiles volants connus.'),
('aerien','Archaeopteryx','Ancien oiseau avec des caractéristiques de dinosaure.'),
('terrien','Velociraptor','Petit prédateur rapide et agile.'),
('terrien','Allosaurus','Prédateur du Jurassique supérieur.'),
('terrien','Ankylosaurus','Dino blindé avec une queue en massue.'),
('eau','Plesiosaurus','Reptile marin avec long cou et quatre nageoires.'),
('eau','Ichthyosaurus','Reptile marin ressemblant à un dauphin.'),
('eau','Mosasaurus','Grand prédateur marin du Crétacé.'),
('eau','Elasmosaurus','Plesiosaure avec un cou extrêmement long.'),
('aerien','Rhamphorhynchus','Ptérosaure avec queue munie d’une nageoire.'),
('terrien','Spinosaurus','Grand prédateur semi-aquatique.'),
('terrien','Diplodocus','Long dinosaure herbivore avec une queue massive.'),
('terrien','Parasaurolophus','Herbivore avec une longue crête sur la tête.'),
('eau','Nothosaurus','Reptile marin prédateur du Trias.'),
('aerien','Dimorphodon','Ptérosaure avec une tête disproportionnée.');

-- =====================
-- Table type_billet
-- =====================
CREATE TABLE type_billet (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    prix NUMERIC(6,2) NOT NULL,
    quantite INT
);

INSERT INTO type_billet (name, prix, quantite)
VALUES
('Adulte', 20.00, 100),
('Enfant', 10.00, 200),
('VIP', 50.00, 20);

-- =====================
-- Table proposer
-- =====================
CREATE TABLE proposer (
    id_reservation INT,
    id_type_billet INT,
    PRIMARY KEY (id_reservation, id_type_billet),
    FOREIGN KEY (id_reservation) REFERENCES reservation(id),
    FOREIGN KEY (id_type_billet) REFERENCES type_billet(id)
);

-- =====================
-- Table autoriser
-- =====================
CREATE TABLE autoriser (
    id_dinosaures INT,
    id_type_billet INT,
    PRIMARY KEY (id_dinosaures, id_type_billet),
    FOREIGN KEY (id_dinosaures) REFERENCES dinosaures(id),
    FOREIGN KEY (id_type_billet) REFERENCES type_billet(id)
);

INSERT INTO autoriser (id_dinosaures, id_type_billet)
VALUES 
(1, 1),(2, 1),(3,1),(4,1),(8,1),(9,1),(10,1),(16,1),(17,1),(18,1),
(5,2),(6,2),(7,2),(15,2),(20,2),
(11,3),(12,3),(13,3),(14,3),(19,3);
