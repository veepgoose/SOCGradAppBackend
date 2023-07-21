const express = require('express');
const router = express.Router();

// Endpoint for displaying a thank you message
router.get('/thank-you', (req, res) => {
  try {
    // You can perform any additional actions here if needed
    // For demonstration, we will just respond with a success message
    res.json({ message: 'Thank you for submitting the form!' });
  } catch (error) {
    console.error('Error displaying thank you message:', error);
    res.status(500).json({ error: 'Failed to display thank you message' });
  }
});

module.exports = router;
