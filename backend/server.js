require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String
});

// Product Model
const Product = mongoose.model("Product", productSchema);

// Home API
app.get("/", (req, res) => {
  res.send("Flipkart DevOps Backend is Running!");
});

// Products API
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch products"
    });
  }
});

// Start Server
async function startServer() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connected successfully");

    // Check if products already exist
    const count = await Product.countDocuments();

    // Insert default products if database is empty
    if (count === 0) {
      const products = [
        {
          name: "Smartphone",
          description: "Latest Android Smartphone",
          price: 19999,
          category: "Mobiles"
        },
        {
          name: "Laptop",
          description: "Powerful Laptop for Work",
          price: 49999,
          category: "Electronics"
        },
        {
          name: "Headphones",
          description: "Wireless Bluetooth Headphones",
          price: 2999,
          category: "Electronics"
        },
        {
          name: "Smart Watch",
          description: "Fitness Smart Watch",
          price: 3999,
          category: "Electronics"
        }
      ];

      await Product.insertMany(products);

      console.log("Default products inserted into MongoDB");
    }

    app.listen(PORT, () => {
      console.log(`Backend server running on http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error("MongoDB connection failed:");
    console.error(error.message);
  }
}

startServer();