'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('SignupCtrl', function ($scope, $http) {
    // Here we're creating some local references
    // so that we don't have to type $scope every
    // damn time
    var user, signup;

    // Here we're creating a scope for our Signup page.
    // This will hold our data and methods for this page.
    $scope.signup = signup = {};

    // In our signup.html, we'll be using the ng-model
    // attribute to populate this object.
    signup.user = user = {};
    signup.submit = function () {
      if (!user.firstname || !user.lastname || !user.email || !user.password1 || !user.password2) {
        alert('You must complete all fields');
      }

      if (user.password1 != user.password2) {
        alert("Password fields must match");
      }

      console.log(user);

      var request = $http.post('/signup', user);
      request.success(function (data) {
        console.log(data);
      })
      request.error(function (data) {
        console.log(data);
      });
    };
  });
