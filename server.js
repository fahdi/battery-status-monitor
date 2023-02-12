const express = require("express");
const mongoose = require("mongoose");
const firebase = require("firebase");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/battery", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Initialize Firebase
firebase.initializeApp({
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  databaseURL: "your-database-url",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id"
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
  let statusMongoDb;
  let statusFirebase;
  const battery = new Battery({
    charging: req.body.charging
  });

  try {
    const savedBattery = await battery.save();
    statusMongoDb = true;
  } catch (error) {
    res.status(400).send(error);
  }

  try {
    const battery = {
      charging: req.body.charging,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    };
    await db.collection("battery").add(battery);
    statusFirebase = true;
  } catch (error) {
    res.status(400).send(error);
  }
  if(statusMongoDb && statusFirebase )
    res.status(201).send(savedBattery);
});

app.listen(3000, () => {
  console.log("Battery status monitor API running on port 3000");
});
