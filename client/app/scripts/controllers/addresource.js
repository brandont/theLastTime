'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AddresourceCtrl
 * @description
 * # AddresourceCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AddResourceCtrl', function ($scope, $http) {
    var resource, addResource; // local variables so I don't have to type out scope ever time.
    $scope.addResource = addResource = {}; // the add resource page attributes
    addResource.resource = resource = {}; // the resource object
    addResource.submit = function () {
      if (!resource.title || !resource.body) {
        alert('You must complete all fields');
      }
      console.log(resource);
      var request = $http.post('/addResource', resource);
      request.success(function (data) {
        console.log(data);
      })
      request.error(function (data) {
        console.log(data);
      });
    };
  });
