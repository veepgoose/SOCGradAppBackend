const express = require('express');
const pool = require('../db');
const express = require('express');
const router = express.Router();

// Endpoint for saving Monday stay data
router.post('/save/monday-stay', async (req, res) => {
  try {
    const { monday } = req.body;
    // Here, you can save the 'monday' value to the database or process it as needed
    // For demonstration, we will just respond with the data received
    res.json({ monday });
  } catch (error) {
    console.error('Error saving Monday stay data:', error);
    res.status(500).json({ error: 'Failed to save Monday stay data' });
  }
});

module.exports = router;
