'use strict';

angular.module('myApp.treatment', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/treatment', {
    templateUrl: 'treatment/treatment.html',
    controller: 'TreatmentCtrl'
  });
}])

.controller('TreatmentCtrl', ['$scope', function($scope) {
$scope.rooms = [
    {"name": "Nexus S",
     "snippet": "Fast just got faster with Nexus S."},
    {"name": "Motorola XOOM™ with Wi-Fi",
     "snippet": "The Next, Next Generation tablet."},
    {"name": "MOTOROLA XOOM™",
     "snippet": "The Next, Next Generation tablet."}
  ];
}]);