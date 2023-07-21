const express = require('express');
const pool = require('../db');
const router = express.Router();

// Endpoint for saving Hackathon data
router.post('/save/hackathon', async (req, res) => {
  try {
    const { hackathon } = req.body;
    // Here, you can save the 'hackathon' value to the database or process it as needed
    // For demonstration, we will just respond with the data received
    res.json({ hackathon });
  } catch (error) {
    console.error('Error saving Hackathon data:', error);
    res.status(500).json({ error: 'Failed to save Hackathon data' });
  }
});

module.exports = router;
