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
    var user, signup;
    $scope.signup = signup = {};
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
