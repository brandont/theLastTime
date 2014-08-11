'use strict';

describe('Controller: AddresourceCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var AddresourceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddresourceCtrl = $controller('AddresourceCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
