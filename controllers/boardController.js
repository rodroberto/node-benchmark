const db = require('../db/database');

const createBoard = async (req, res) => {
  const { name, manufacturerId } = req.body;
  if (!name || !manufacturerId)
    return res
      .status(400)
      .json({ message: 'Name and Manufacturer Id is required.' });
  try {
    await db
      .promise()
      .query(
        `INSERT INTO boards (name, manufacturerId) VALUES ('${name}', '${manufacturerId}')`
      );
    res.json({ message: 'Board was created successfully' });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getBoards = async (_req, res) => {
  try {
    const data = await db
      .promise()
      .query(
        `SELECT boards.id, boards.name, boards.manufacturerId, manufacturers.name as manufacturerName FROM boards JOIN manufacturers ON boards.manufacturerId = manufacturers.id`
      );
    res.json(data[0]);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const updateBoard = async (req, res) => {
  const { id, name, manufacturerId } = req.body;
  if (!id || !name || !manufacturerId)
    return res.status(400).json({ message: 'Id and Name is required.' });
  try {
    await db
      .promise()
      .query(
        `UPDATE boards SET name = '${name}', manufacturerId = '${manufacturerId}' WHERE id = '${id}'`
      );
    res.json({ message: 'Board was updated successfully' });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const deleteBoard = async (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ message: 'Id is required.' });
  try {
    await db.promise().query(`DELETE FROM boards WHERE id = '${id}'`);
    res.json({ message: 'Board was deleted successfully' });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = {
  createBoard,
  getBoards,
  updateBoard,
  deleteBoard,
};
