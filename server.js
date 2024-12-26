const express = require("express");
const User = require("./db.js").User; // Import the User model from db.js
const Details = require("./db.js").Details; // Import the Details model from db.js
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get("/", cors(), (req, res) => {
  // Handle GET requests if needed
});

app.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await User.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("fail");
  }
});

app.post("/signup", async (req, res) => {
  const { email, password, name, phoneNumber, city, pincode } = req.body;

  const userData = {
    email: email,
    password: password,
    name: name,
    phoneNumber: phoneNumber,
    city: city,
    pincode: pincode
  };

  try {
    const check = await User.findOne({ email: email });

    if (check) {
      res.status(400).json("User already exists");
    } else {
      await User.create(userData);
      res.status(201).json("User created successfully");
    }
  } catch (error) {
    console.error("Failed to create user:", error);
    res.status(500).json("Failed to create user");
  }
});

app.post("/details", async (req, res) => {
  const { email, name, phone, age, dob, address, state, district, pincode } = req.body;

  const detailsData = {
    // email: email, // Include email field
    name: name,
    phoneNumber: phoneNumber, // Adjust field name to match schema
    age: age,
    dob: dob,
    address: address,
    state: state,
    district: district,
    pincode: pincode
  };

  try {
    const check = await Details.findOne({ phoneNumber:phoneNumber });

    if (check) {
      res.status(400).json("Details already exist");
    } else {
      await Details.create(detailsData);
      res.status(201).json("Details saved successfully");
    }
  } catch (error) {
    console.error("Failed to save details:", error);
    res.status(500).json("Failed to save details");
  }
});

app.listen(9000, () => {
  console.log("Server connected on port 9000");
});
