const mongoose = require("mongoose");

const materialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});


module.exports = mongoose.model('materials', materialSchema);