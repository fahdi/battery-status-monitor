const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const BatterySchema = new mongoose.Schema({
  charging: { type: Boolean, required: true },
  timestamp: { type: Date, default: Date.now }
});

const Battery = mongoose.model('Battery', BatterySchema);

router.post('/battery', async (req, res) => {
  const { charging } = req.body;

  const battery = new Battery({
    charging
  });

  try {
    await battery.save();
    res.status(201).send('Battery status saved successfully');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
