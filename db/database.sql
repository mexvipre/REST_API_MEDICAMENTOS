-- Active: 1746819405739@@127.0.0.1@3306@clinica
create database clinica

use  clinica;

CREATE TABLE medicamentos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tipo ENUM('Analgésico', 'Antiinflamatorio', 'Antibiótico', 'Antihistamínico') NOT NULL,
  nombre VARCHAR(120) NOT NULL,
  nomcomercial VARCHAR(40) UNIQUE NOT NULL,  -- Nomcomercial no puede repetirse
  presentacion ENUM('Tabletas', 'Cápsulas', 'Suspensión', 'Jarabe', 'Polvo') NOT NULL,
  receta ENUM('S', 'N') NOT NULL,
  precio DECIMAL(7,2) NOT NULL CHECK (precio > 0),  -- Precio no puede ser negativo o cero
  UNIQUE(nombre)  -- Evitar duplicación de nombres
);

INSERT INTO medicamentos (tipo, nombre, nomcomercial, presentacion, receta, precio) VALUES
('Analgésico', 'Paracetamol', 'Doloforte', 'Tabletas', 'S', 25.50),
('Analgésico', 'Ibuprofeno', 'Actron', 'Tabletas', 'N', 30.00),
('Analgésico', 'Tramadol', 'Ultracet', 'Tabletas', 'S', 100.00),
('Analgésico', 'Aspirina', 'Bayer', 'Tabletas', 'N', 15.00),
('Antiinflamatorio', 'Omeprazol', 'Omecaps', 'Cápsulas', 'S', 80.00),
('Antiinflamatorio', 'Diclofenac', 'Voltaren', 'Tabletas', 'N', 50.00),
('Antiinflamatorio', 'Ranitidina', 'Zantac', 'Tabletas', 'S', 75.00),
('Antiinflamatorio', 'Prednisona', 'Deltasone', 'Tabletas', 'N', 70.00),
('Antibiótico', 'Amoxicilina', 'Amoxidal', 'Suspensión', 'S', 120.00),
('Antibiótico', 'Azitromicina', 'Zithromax', 'Tabletas', 'S', 150.00),
('Antibiótico', 'Ciprofloxacino', 'Cipro', 'Tabletas', 'S', 85.00),
('Antibiótico', 'Clindamicina', 'Cleocin', 'Cápsulas', 'N', 95.00),
('Antihistamínico', 'Loratadina', 'Clarityn', 'Tabletas', 'N', 40.00),
('Antihistamínico', 'Clorfenamina', 'Clorotrimeton', 'Tabletas', 'N', 20.00),
('Antihistamínico', 'Cetirizina', 'Zyrtec', 'Tabletas', 'N', 35.00),
('Antihistamínico', 'Desloratadina', 'Aerius', 'Tabletas', 'S', 45.00),
('Analgésico', 'Metamizol', 'Novalgin', 'Jarabe', 'S', 60.00),
('Antiinflamatorio', 'Lansoprazol', 'Prevacid', 'Cápsulas', 'S', 50.00),
('Antibiótico', 'Levofloxacino', 'Levaquin', 'Tabletas', 'S', 110.00),
('Antihistamínico', 'Diphenhidramina', 'Benadryl', 'Jarabe', 'N', 25.00);


select * from medicamentos



