'use strict';

/**
 * @ngdoc function
 * @name tryBoroApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tryBoroApp
 */
angular.module('tryBoroApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
