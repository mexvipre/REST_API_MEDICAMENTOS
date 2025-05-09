# Procedimientos para implementación #

1. Clonar repositorio
```
git clone https://github.com/mexvipre/REST_API_MEDICAMENTOS
```

2. Reconstruir node_modules
```
npm install
```

3. Construir el archivo .env
```
DB_HOST=
DB_PORT=
DB_PASSWORD=
DB_USER=
DB_DATABASE=
```

4. Restaure la BD (db > database.sql)

```sql
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
```

5. Ejecute el proyecto:
```
npm run dev
```