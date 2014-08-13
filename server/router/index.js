/**
 * The Index of Routes
 */
module.exports = function (app) {
  // The signup route
  app.use('/signup', require('./routes/signup'));

  // The add resource route
  app.use('/addResource', require('./routes/resource'));

  // Add the material to GCS
  app.use('/addMaterial', require('./routes/material'));
}