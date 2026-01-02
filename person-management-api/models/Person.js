const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: true,
    min: 1,
    max: 150
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Other']
  },
  mobile: {
    type: String,
    required: true,
    match: /^\d{10}$/
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Person', personSchema);