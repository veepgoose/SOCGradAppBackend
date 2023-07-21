const express = require('express');
const router = express.Router();
const Bootcamper = require('../models/Bootcamper');

router.post('/save', async (req, res) => {
  try {
    const bootcamperData = req.body;
    const bootcamper = new Bootcamper(bootcamperData); // Use 'Bootcamper' instead of 'bootcamperData'
    const saved = await bootcamper.saveBootcamperData(bootcamperData);

    if (saved) {
      res.status(200).json({ message: 'Data saved successfully' });
    } else {
      res.status(500).json({ error: 'Failed to save data' });
    }
  } catch (err) {
    console.error('Error saving bootcamper data:', err);
    res.status(500).json({ error: 'Failed to save data' });
  }
});

module.exports = router;

