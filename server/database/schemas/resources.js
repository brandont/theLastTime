/**
 * Our Schema for Resources
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define the User Schema
var resourceScheme = new Schema({
  title: { type: String, required: true },
  material: { type: String, required: true },
  body: { type: String, required: true}
});

// A method that's called every time a user document is saved..
resourceScheme.pre('save', function (next) {
  var resource = this;
});

// The primary user model
var Resource = mongoose.model('Resource', resourceScheme);

module.exports = Resource;