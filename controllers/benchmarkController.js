const db = require('../db/database');

const createBenchmark = async (req, res) => {
  const { name, unit, cpu, network, description } = req.body;
  if (!name || !unit)
    return res.status(400).json({ message: 'Name and Unit is required.' });
  try {
    await db
      .promise()
      .query(
        `INSERT INTO benchmarks (name, unit, cpu, network, description) VALUES ('${name}', '${unit}', '${cpu}', '${network}', '${description}')`
      );
    res.json({ message: 'Benchmark was created successfully' });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getBenchmarks = async (_req, res) => {
  try {
    const data = await db.promise().query(`SELECT * FROM benchmarks`);
    res.json(data[0]);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const updateBenchmark = async (req, res) => {
  const { id, name, unit, cpu, network, description } = req.body;
  if (!id || !name || !unit)
    return res.status(400).json({ message: 'Id, Name and Unit is required.' });
  try {
    await db
      .promise()
      .query(
        `UPDATE benchmarks SET name = '${name}', unit = '${unit}', cpu = '${cpu}', network = '${network}', description = '${description}' WHERE id = '${id}'`
      );
    res.json({ message: 'Benchmark was updated successfully' });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const deleteBenchmark = async (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ message: 'Id is required.' });
  try {
    await db.promise().query(`DELETE FROM benchmarks WHERE id = '${id}'`);
    res.json({ message: 'Benchmark was deleted successfully' });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = {
  createBenchmark,
  getBenchmarks,
  updateBenchmark,
  deleteBenchmark,
};
