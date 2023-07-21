
async function saveUser(pool, name, email) {
  try {
    const query = 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *';
    const values = [name, email];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw new Error('Error saving user data to the database');
  }
}

module.exports = {
  saveUser,
};
