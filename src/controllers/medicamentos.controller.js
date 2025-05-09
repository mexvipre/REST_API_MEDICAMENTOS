import { pool } from '../db.js';

// Obtener todos los medicamentos
export const getMedicamentos = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM medicamentos');
    res.json({
      status: true,
      data: rows,
    });
  } catch (error) {
    console.error("Error al obtener los medicamentos:", error);
    res.status(500).send({
      status: false,
      message: "Error al obtener los medicamentos",
    });
  }
};

// Obtener medicamento por ID
export const getMedicamentosById = async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await pool.query('SELECT * FROM medicamentos WHERE id = ?', [id]);

    if (rows.length === 0) {
      return res.status(404).send({
        status: false,
        message: `No se encontró medicamento con ID ${id}`,
      });
    }

    res.json({
      status: true,
      data: rows[0],
    });
  } catch (error) {
    console.error("Error al obtener el medicamento por ID:", error);
    res.status(500).send({
      status: false,
      message: "Error al obtener el medicamento por ID",
    });
  }
};


export const getMedicamentosByReceta = async (req, res) => {
  const { receta } = req.params;

  try {
    const [rows] = await pool.query(
      'SELECT * FROM medicamentos WHERE receta = ?', 
      [receta]
    );

    res.json({
      status: true,
      data: rows
    });
  } catch (error) {
    console.error('Error al filtrar por receta:', error);
    res.status(500).json({
      status: false,
      message: 'Error al obtener medicamentos por receta'
    });
  }
};



export const getMedicamentosByTipo = async (req, res) => {
  const { tipo } = req.params;

  try {
    const [rows] = await pool.query(
      'SELECT * FROM medicamentos WHERE tipo = ?', 
      [tipo]
    );

    res.json({
      status: true,
      data: rows
    });
  } catch (error) {
    console.error('Error al filtrar por tipo:', error);
    res.status(500).json({
      status: false,
      message: 'Error al obtener medicamentos por tipo'
    });
  }
};















// Crear un nuevo medicamento
export const createMedicamentos = async (req, res) => {
  const { tipo, nombre, nomcomercial, presentacion, receta, precio } = req.body;

  // Validación básica
  if (!nombre || !tipo || !presentacion || !receta || !precio) {
    return res.status(400).send({
      status: false,
      message: "Faltan datos en la solicitud",
    });
  }

  if (precio <= 0) {
    return res.status(400).send({
      status: false,
      message: "El precio debe ser mayor que 0",
    });
  }

  try {
    const query = `
      INSERT INTO medicamentos (tipo, nombre, nomcomercial, presentacion, receta, precio)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const [result] = await pool.query(query, [tipo, nombre, nomcomercial, presentacion, receta, precio]);
    
    res.status(201).send({
      status: true,
      message: `Medicamento creado con ID: ${result.insertId}`,
    });
  } catch (error) {
    console.error("Error al guardar el medicamento:", error);
    res.status(500).send({
      status: false,
      message: "Error al guardar el medicamento",
    });
  }
};

// Actualizar un medicamento por ID
export const updateMedicamentos = async (req, res) => {
  const { id } = req.params;
  const { tipo, nombre, nomcomercial, presentacion, receta, precio } = req.body;

  // Validación básica
  if (precio <= 0) {
    return res.status(400).send({
      status: false,
      message: "El precio debe ser mayor que 0",
    });
  }

  try {
    const [rows] = await pool.query('SELECT * FROM medicamentos WHERE id = ?', [id]);

    if (rows.length === 0) {
      return res.status(404).send({
        status: false,
        message: `No se encontró medicamento con ID ${id}`,
      });
    }

    const query = `
      UPDATE medicamentos
      SET tipo = ?, nombre = ?, nomcomercial = ?, presentacion = ?, receta = ?, precio = ?
      WHERE id = ?
    `;
    const [result] = await pool.query(query, [tipo, nombre, nomcomercial, presentacion, receta, precio, id]);

    res.send({
      status: true,
      message: `Medicamento actualizado con ID: ${id}`,
    });
  } catch (error) {
    console.error("Error al actualizar el medicamento:", error);
    res.status(500).send({
      status: false,
      message: "Error al actualizar el medicamento",
    });
  }
};

// Eliminar un medicamento por ID
export const deleteMedicamentos = async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await pool.query('SELECT * FROM medicamentos WHERE id = ?', [id]);

    if (rows.length === 0) {
      return res.status(404).send({
        status: false,
        message: `No se encontró medicamento con ID ${id}`,
      });
    }

    // Verificar que el medicamento no esté marcado como receta 'S'
    if (rows[0].receta === 'S') {
      return res.status(400).send({
        status: false,
        message: "No se puede eliminar un medicamento que tiene receta 'S'",
      });
    }

    await pool.query('DELETE FROM medicamentos WHERE id = ?', [id]);

    res.send({
      status: true,
      message: `Medicamento eliminado con ID: ${id}`,
    });
  } catch (error) {
    console.error("Error al eliminar el medicamento:", error);
    res.status(500).send({
      status: false,
      message: "Error al eliminar el medicamento",
    });
  }
};
