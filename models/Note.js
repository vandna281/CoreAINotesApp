const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String },
  sentiment: { type: String }, // Positive, Neutral, Negative
  summary: { type: String },   // Auto-generated summary
}, { timestamps: true });

module.exports = mongoose.model('Note', NoteSchema);
