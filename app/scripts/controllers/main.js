'use strict';

/**
 * @ngdoc function
 * @name tryBoroApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tryBoroApp
 */
angular.module('tryBoroApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
