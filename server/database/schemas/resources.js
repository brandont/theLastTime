/**
 * Our Schema for Resources
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define the User Schema
var resourceSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true},
  material: { type: String, required: false }
});

//// A method that's called every time a user document is saved..
//resourceSchema.pre('save', function (next) {
//  var resource = this;
//});

// The primary user model
var Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;