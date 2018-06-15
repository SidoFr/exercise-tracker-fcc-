const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  userId: String,
  description: String,
  duration: Number,
  date: String,
});

module.exports = mongoose.model('Exercise', exerciseSchema);
