const pool = require('./db.js');

const createEventProposalsUsers = (name, email) => {
  return pool.query(`
  INSERT INTO users (name, email)
  VALUES(${name}, ${email})
  `);
};

module.exports = {
  createEventProposalsUsers

};