/**
 * Our Schema for Resources
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

// Define the User Schema
var resourceSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true},
  materials: [{ type : ObjectId, ref: 'Material' }]
});

// The primary user model
var Resource = mongoose.model('Resource', resourceSchema);
module.exports = Resource;