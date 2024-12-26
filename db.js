const mongoose = require("mongoose");

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/react-login-tut", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    // Handle connection errors gracefully (e.g., retry logic, exit process)
  }
}

connectToDatabase();

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String, // Consider using a more specific type for phone numbers (e.g., Number)
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pincode: {
    type: String, // Consider using a more specific type for pincodes (e.g., Number)
    required: true,
  },
});

// Define a unique index on the email field for efficient validation
// Define a model for the user schema
const User = mongoose.model("User", userSchema);

const detailsSchema = new mongoose.Schema({
  // email: {
  //   type: String,
  //   required: true,
  //   unique: true, // Ensure email is unique
  // },
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String, // Consider using a more specific type for phone numbers (e.g., Number)
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  pincode: {
    type: String, // Consider using a more specific type for pincodes (e.g., Number)
    required: true,
  },
});

// Define a model for the details schema
const Details = mongoose.model("Details", detailsSchema);

module.exports = { User, Details };
