const { Pool } = require('pg');
const config = require('../config');

const pool = new Pool(config.db);

class Bootcamper {
  async saveBootcamperData(data) {
    try {
      const { name, email, stayMonday, hackathon, stayTuesday, drinksAfterCeremony, drinkChoice } = data;
      const query = `INSERT INTO Bootcampers (name, email, stay_monday, hackathon, stay_tuesday, drinks_after_ceremony, drink_choice) 
                     VALUES ($1, $2, $3, $4, $5, $6, $7)`;
      const values = [name, email, stayMonday, hackathon, stayTuesday, drinksAfterCeremony, drinkChoice];

      await pool.query(query, values);
      return true;
    } catch (err) {
      console.error('Error saving student data:', err);
      return false;
    }
  }
}

module.exports = Bootcamper;
