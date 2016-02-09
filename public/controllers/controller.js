var myApp = angular.module('myApp',[]);

myApp.controller('mainController', ['$scope','$http', function($scope, $http) {
	
	$http.get('/mainfunction').success(function (response){

	}
)
}]);