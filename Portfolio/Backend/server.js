import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve("backend/.env") });
console.log("ENV CHECK:", process.env.MONGO_URI);

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log(err));

// Schema
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true }
});

const Contact = mongoose.model("Contact", ContactSchema);

// Route
app.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(200).json({ message: "Saved successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});
app.get("/", (req, res) => {
  res.send("Backend is working");
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
