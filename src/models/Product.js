const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  mrp: {
    type: Number,
    required: true,
    min: 0,
  },
  sizes: {
    type: [String],
    default: [],
  },
  size_prices: {
    type: Map,
    of: Number,
    default: {},
  },
  tag: {
    type: String,
    default: "",
  },
  image_url: {
    type: String,
    default: "",
  },
  stock: {
    type: Number,
    default: 100,
    min: 0,
  },
  status: {
    type: String,
    enum: ["Available", "Unavailable", "Coming Soon", "Out of Stock"],
    default: "Available",
  },
  low_stock_threshold: {
    type: Number,
    default: 5,
  },
  avg_rating: {
    type: Number,
    default: 4.5,
    min: 0,
    max: 5,
  },
  num_reviews: {
    type: Number,
    default: 12,
    min: 0,
  },
  // Product Details
  product_type: {
    type: String,
    default: "",
    trim: true,
  },
  style: {
    type: String,
    default: "",
    trim: true,
  },
  pattern: {
    type: String,
    default: "",
    trim: true,
  },
  color: {
    type: String,
    default: "",
    trim: true,
  },
  fabric: {
    type: String,
    default: "",
    trim: true,
  },
  occasion: {
    type: String,
    default: "",
    trim: true,
  },
  fit: {
    type: String,
    default: "",
    trim: true,
  },
  sleeve_type: {
    type: String,
    default: "",
    trim: true,
  },
  neck_type: {
    type: String,
    default: "",
    trim: true,
  },
  // Product Specifications
  care_instructions: {
    type: String,
    default: "",
    trim: true,
  },
  other_specifications: {
    type: String,
    default: "",
    trim: true,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

// Indexes for high performance searching, filtering, and sorting
productSchema.index({ is_active: 1, created_at: -1 });
productSchema.index({ category: 1, is_active: 1 });
productSchema.index({ category: 1, is_active: 1, created_at: -1 });
productSchema.index({ price: 1 });

module.exports = mongoose.model("Product", productSchema);
