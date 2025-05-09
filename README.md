# Procedimientos para implementación #

1. Clonar repositorio
```
git clone https://github.com/edwleo/rest-api-software.git
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
CREATE DATABASE appstore;
USE appstore;

CREATE TABLE softwares
(
  id          INT AUTO_INCREMENT PRIMARY KEY,
  nombre      VARCHAR(40) NOT NULL,
  espaciomb   SMALLINT NOT NULL,
  versionsoft VARCHAR(20) NOT NULL,
  precio      DECIMAL(7,2) NOT NULL
)ENGINE = INNODB;
```

5. Ejecute el proyecto:
```
npm run dev
```