const express = require('express');
const pool = require('../db');
const router = express.Router();

// Endpoint for saving CelebrationForm data
router.post('/save/afterparty', async (req, res) => {
  try {
    const { afterparty } = req.body;
    // Here, you can save the 'afterparty' value to the database or process it as needed
    // For demonstration, we will just respond with the data received
    res.json({ afterparty });
  } catch (error) {
    console.error('Error saving CelebrationForm data:', error);
    res.status(500).json({ error: 'Failed to save CelebrationForm data' });
  }
});

module.exports = router;
