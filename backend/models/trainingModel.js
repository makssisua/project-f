const mongoose = require('mongoose');

const trainingSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Add training name'],
  },
  startDay: {
    type: String,
    required: [true, 'Add start day'],
  },
  videoUrl: {
    type: String,
  },
  description: {
    type: String,
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Training', trainingSchema);