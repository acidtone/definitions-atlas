const mongoose = require('./db')

const defSchema = new mongoose.Schema({
  term: String,
  description: String,
  slug: String
});

module.exports = mongoose.model('Definition', defSchema);