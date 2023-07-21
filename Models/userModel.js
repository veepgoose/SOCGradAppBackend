import { pool } from "../db/db.js";

// CREATE TABLE ATTENDEES (
// attendee_id SERIAL PRIMARY KEY,
// name TEXT,
// email TEXT,
// staying_monday BOOL,
// hackathon BOOL,
// staying_tuesday BOOL,
// going_out_interest BOOL,
// beer BOOL,
// wine BOOL,
// spirits BOOL,
// beast_mode BOOL);

//
//ONE GIANT FUNCTION
//

export async function addUser(
  name,
  email,
  staying_monday,
  hackathon,
  staying_tuesday,
  going_out_interest,
  beer,
  wine,
  spirits,
  beast_mode
) {
  const query =
    "INSERT INTO ATTENDEES (name, email, staying_monday, hackathon, staying_tuesday, going_out_interest, beer, wine, spirits, beast_mode) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";
  const values = [
    name,
    email,
    staying_monday,
    hackathon,
    staying_tuesday,
    going_out_interest,
    beer,
    wine,
    spirits,
    beast_mode,
  ];

  const result = await pool.query(query, values);

  return result.rows[0];
}

export async function getAllUsers() {
  const result = await pool.query("SELECT * FROM attendees");

  return result.rows;
}