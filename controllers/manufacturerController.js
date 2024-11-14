const db = require('../db/database');

const createManufacturer = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'Name is required.' });
  try {
    await db
      .promise()
      .query(`INSERT INTO manufacturers (name) VALUES ('${name}')`);
    res.json({ message: 'Manufacturer was created successfully' });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getManufacturers = async (_req, res) => {
  try {
    const data = await db.promise().query(`SELECT * FROM manufacturers`);
    res.json(data[0]);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const updateManufacturer = async (req, res) => {
  const { id, name } = req.body;
  if (!id || !name)
    return res.status(400).json({ message: 'Id and Name is required.' });
  try {
    await db
      .promise()
      .query(`UPDATE manufacturers SET name = '${name}' WHERE id = '${id}'`);
    res.json({ message: 'Manufacturer was updated successfully' });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const deleteManufacturer = async (req, res) => {
    const { id } = req.body;
    if (!id)
      return res.status(400).json({ message: 'Id is required.' });
    try {
      await db
        .promise()
        .query(`DELETE FROM manufacturers WHERE id = '${id}'`);
      res.json({ message: 'Manufacturer was deleted successfully' });
    } catch (err) {
      res.status(500).json(err.message);
    }
  };

module.exports = {
  createManufacturer,
  getManufacturers,
  updateManufacturer,
  deleteManufacturer
};
