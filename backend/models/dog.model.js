const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  healthStatus: {
    type: String,
    default: "Healthy"
  },
  adopted: {
    type: Boolean,
    default: false
  },
  imageUrl: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Dog = mongoose.model('Dog', dogSchema);
module.exports = Dog;
