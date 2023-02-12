const express = require("express");
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/battery", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const batterySchema = new mongoose.Schema({
  charging: {
    type: Boolean,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Battery = mongoose.model("Battery", batterySchema);

const app = express();

app.use(express.json());

app.post("/battery", async (req, res) => {
  const battery = new Battery({
    charging: req.body.charging
  });

  try {
    const savedBattery = await battery.save();
    res.status(201).send(savedBattery);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(3000, () => {
  console.log("Battery status monitor API running on port 3000");
});
