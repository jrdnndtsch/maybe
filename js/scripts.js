var app = angular.module('maybe', []);


app.controller('MainCtrl', function($scope, answers){


	$scope.newAnswer = function() {
		answers.getAnswer().then(function(data){
			$scope.item = data;
		});
	};

	$scope.newAnswer();

});

app.directive('pizza', function(){
	return{
		restrict: 'E',
		templateUrl: 'js/templates/pizza.html'
	};
});

app.factory('answers', function($http, $q){
	var api = 'http://yesno.wtf/api';

	return{
		getAnswer: function(){
			var def = $q.defer();

			$http.get(api)
				.success(def.resolve)
				.error(def.reject);

			return def.promise;	
		}
	}
});