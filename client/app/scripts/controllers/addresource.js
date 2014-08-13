'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AddresourceCtrl
 * @description
 * # AddresourceCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AddResourceCtrl',
    ['$scope', '$http', '$upload', function ($scope, $http, $upload) {
      var resource, addResource; // local variables so I don't have to type out scope ever time.
      $scope.addResource = addResource = {}; // the add resource page attributes
      addResource.resource = resource = {}; // the resource object
      addResource.submit = function () {
        if (!resource.title || !resource.body) {
          alert('You must complete all fields');
        }
        var request = $http.post('/addResource', resource);
        request.success(function (data) {
          console.log(data);
        })
        request.error(function (data) {
          console.log(data);
        });
      };
      addResource.addMaterial = function () {
        console.log('here we are');
      };
      $scope.onFileSelect = function ($files) {
        console.log('on files select');
        //$files: an array of files selected, each file has name, size, and type.
        for (var i = 0; i < $files.length; i++) {
          var file = $files[i];
          console.log(file);
          $scope.upload = $upload.upload({
            url: '/addMaterial',
            method: 'POST',
              data: {
              name: file.name,
              size: file.size,
              type: file.type
            },
            file: file, // or list of files ($files) for html5 only
            fileFormDataName: 'material' //or a list of names for multiple files (html5). Default is 'file'
            //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)
            // customize file formData name ('Content-Desposition'), server side file variable name.
            // customize how data is added to formData. See #40#issuecomment-28612000 for sample code
            //formDataAppender: function(formData, key, val){}
          }).progress(function (evt) {
            console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
          }).success(function (data, status, headers, config) {
            // file is uploaded successfully
            console.log(data);
          })
          .error(function (err) {
            console.log(err);
          });
          //.then(success, error, progress);
          // access or attach event listeners to the underlying XMLHttpRequest.
          //.xhr(function(xhr){xhr.upload.addEventListener(...)})
        }
        /* alternative way of uploading, send the file binary with the file's content-type.
         Could be used to upload files to CouchDB, imgur, etc... html5 FileReader is needed.
         It could also be used to monitor the progress of a normal http post/put request with large data*/
        // $scope.upload = $upload.http({...})  see 88#issuecomment-31366487 for sample code.
      };
    }]
  );
