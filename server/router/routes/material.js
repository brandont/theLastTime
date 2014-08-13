/**
 * This handles the addition of resources
 */
var express = require('express');
var router = express.Router();
var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');
var db = require('../../database');
var formidable = require('formidable');
var http = require('http');
var util = require('util');
var Materials = db.materials;

// The POST /addMaterial route
router.post('/', function (req, res) {
  var form = new formidable.IncomingForm()
  var material = {};
  form.keepExtensions = true;
  form.type = 'multipart';
  form.parse(req);
  form.on('file', function(name, file) {
    material = file;
  });
  form.on('error', function(err) {
    return err;
  });
  form.on('end', function() {
    var newMaterial = new Materials({
      name: material.name,
      size: material.size,
      type: material.type
    });

    // save the user to the database
    newMaterial.save(function (err, savedMaterial, numberAffected) {
      if (err) {
        console.log('Problem saving the material ' + material.name + ' due to ' + err);
        res.status(500).json({
          'message': 'Database error trying to add material.'
        });
      }
      // Log success and send the filtered user back
      console.log('Successfully created new material: ' + material.name);
      res.status(201).json({
        'message': 'Successfully created new material'
      });
    });
  });
});

module.exports = router;