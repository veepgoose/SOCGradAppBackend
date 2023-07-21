// /backend/controllers/nameEmailController.js

const pool = require('../db');
const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

// Endpoint for saving user name and email
router.post('/save/name-email', async (req, res) => {
  try {
    const { name, email } = req.body;
    const savedUser = await userModel.saveUser(pool, name, email);
    res.json(savedUser);
  } catch (error) {
    console.error('Error saving name and email data:', error);
    res.status(500).json({ error: 'Failed to save name and email data' });
  }
});

module.exports = router;

