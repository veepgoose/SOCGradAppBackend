import { addUser, getAllUsers } from "../Models/userModel.js";

//
//ONE GIANT FUNCTION
//

export async function postUser(req, res) {
  const {
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
  } = req.body;

  const result = await addUser(
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
  );

  res.json({ success: true, payload: result });
}

export async function getUser(req, res) {
  const result = await getAllUsers();

  res.json({ success: true, payload: result });
}
