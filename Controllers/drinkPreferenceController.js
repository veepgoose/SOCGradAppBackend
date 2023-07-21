const express = require('express');
const pool = require('../db');
const router = express.Router();

// Endpoint for saving DrinkPreferenceForm data
router.post('/save/drink-preference', async (req, res) => {
  try {
    const { beer, wine, spirits, beast, none } = req.body;
    // Here, you can save the drink preferences to the database or process them as needed
    // For demonstration, we will just respond with the data received
    res.json({ beer, wine, spirits, beast, none });
  } catch (error) {
    console.error('Error saving DrinkPreferenceForm data:', error);
    res.status(500).json({ error: 'Failed to save DrinkPreferenceForm data' });
  }
});

module.exports = router;
