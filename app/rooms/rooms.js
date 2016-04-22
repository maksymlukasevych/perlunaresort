'use strict';


angular.module('myApp.rooms', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  	when('/rooms', {
    templateUrl: 'rooms/rooms.html',
    controller: 'RoomsCtrl'
  }).
  	when('/rooms/:roomId', {
     templateUrl: 'partials/room-detail.html', 
     controller: 'RoomsCtrl'
        });
  	function RoomsCtrl($scope, $routeParams) {
  $scope.roomId = $routeParams.roomId;
}
}])

.controller('RoomsCtrl', ['$scope', function($scope) {
$scope.rooms = [
	
    {"id": "one-room",
    	"imageUrl": "hotel_rooms/1.jpg",
     "name": "Однокімнатний",
     "text": "Двомісний номер  при одномісному \
      розміщенні Затишний однокімнатний номер (площа – 17 кв.м) \
      з двоспальним або двома односпальними ліжками та сучасними\
       меблями дозволяє здійснювати одномісне розміщення наших."}
  ];
}]);

