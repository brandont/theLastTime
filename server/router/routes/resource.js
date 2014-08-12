/**
 * This handles the addition of resources
 */
var express = require('express');
var router = express.Router();
var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');
var db = require('../../database');
var Resources = db.resources;

// The POST /signup route
router.post('/', function (req, res) {
  // The posted information from the front-end
  var body = req.body;
  // Current time this occurred
  var time = moment().format('MMMM Do YYYY, h:mm:ss a');
  // Check to see if the user already exists
  Resources.findOne({
    'title': body.title
  }, function (err, resource) {
    // If there's an error, log it and return to user
    if (err) {
      // Nice log message on your end, so that you can see what happened
      console.log('Couldn\'t create new resource at ' + color.red(time) + ' by ' + color.red(body.title) + ' because of: ' + err);
      // send the error
      res.status(500).json({
        'message': 'Internal server error from signing up new user. Please contact support@yourproject.com.'
      });
    }

    // If the user doesn't exist, create one
    if (!resource) {
      console.log('Creating a new resource at ' + color.green(time) + ' with the email: ' + color.green(body.title));
      // setup the new user
      var newResource = new Resources({
        title: body.title,
        body: body.body,
        material: body.material
      });

      // save the user to the database
      newResource.save(function (err, savedResource, numberAffected) {
        if (err) {
          console.log('Problem saving the resource ' + color.yellow(body.title) + ' due to ' + err);
          res.status(500).json({
            'message': 'Database error trying to add resource.  Please contact support@yourproject.com.'
          });
        }
        // Log success and send the filtered user back
        console.log('Successfully created new resource: ' + color.green(body.title));
        res.status(201).json({
          'message': 'Successfully created new resource',
        });
      });
    }

    // If the user already exists...
    if (resource) {
      res.status(409).json({
        'message': body.title + ' already exists!'
      });
    }
  });
});

// export the router for usage in our server/router/index.js
module.exports = router;