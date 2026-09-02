const mongoose = require("mongoose");

// Schema
const resortSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, "Resort ID is mandatory."],
  },

  name: {
    type: String,
    required: [true, "Resort name is mandatory."],
    unique: true,
  },

  location: {
    description: String,
    type: {
      type: String,
      default: "Point",
    },
    coordinates: [Number],
    address: String,
  },

  ratingsAverage: {
    type: Number,
    default: 0,
  },

  ratingsQuantity: {
    type: Number,
    default: 0,
  },

  images: [String],

  roomTypes: [String],

  amenities: [String],

  pricePerNight: {
    type: Number,
    required: [true, "Price per night is mandatory."],
  },

  maxGuests: {
    type: Number,
    required: [true, "Maximum guests is mandatory."],
  },

  summary: String,

  description: String,
});

const Resorts = mongoose.model("Resorts", resortSchema);

Resorts.createIndexes()
  .then(() => console.log("Indexes created"))
  .catch((err) => console.log("Error:", err.message));

module.exports = Resorts;
