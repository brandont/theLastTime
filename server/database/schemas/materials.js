var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var MaterialSchema = new mongoose.Schema({
  id: { type: ObjectId },
  name: { type: String, required: true },
  size: { type: String, required: true },
  type: { type: String, required: true }
});

var Material = mongoose.model('Material', MaterialSchema);
module.exports = Material;