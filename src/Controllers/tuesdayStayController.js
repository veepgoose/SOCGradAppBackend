const express = require('express');
const pool = require('../db');
const router = express.Router();

// Endpoint for saving TuesdayStay data
router.post('/save/tuesday', async (req, res) => {
  try {
    const { tuesday } = req.body;
    // Here, you can save the 'tuesday' value to the database or process it as needed
    // For demonstration, we will just respond with the data received
    res.json({ tuesday });
  } catch (error) {
    console.error('Error saving TuesdayStay data:', error);
    res.status(500).json({ error: 'Failed to save TuesdayStay data' });
  }
});

module.exports = router;
