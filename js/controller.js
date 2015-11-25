/* JavaScript controller - AngularJS plus Material Design 
 *  Made by Carlos Henrique Motta - March 09, 2015
 */
var App = angular.module("exampleTodo", []);

App.controller('TodoCtrl', ['$scope', function ($scope) {
	/* Array of Todos */ 
	$scope.todos = [];

	$scope.init = function() {
		console.log("HELLO LOCALSTORAGE");
		if(window.localStorage['todos']) {
			console.log("trying to load from LOCALSTORAGE");
			$scope.todos = JSON.parse(window.localStorage['todos']);
		}
	}

	$scope.remaining = function() {
		var todo = {},
			count = 0;

		for (var i = 0; i < $scope.todos.length ; i++) {
			todo = $scope.todos[i];
			if(!todo.isDone) {
				count++;
			}
		};

		return count;
	}

	$scope.addItem = function() {
		$scope.todos.push({taskName: $scope.itemText, isDone: false});
		$scope.saveLocalStorage();
		$scope.itemText = "";
	}

	$scope.saveLocalStorage = function() {
		console.log("trying to save on LOCALSTORAGE");
		window.localStorage['todos'] = JSON.stringify($scope.todos);
	}

	$scope.deleteTodo = function(index) {
		$scope.todos.splice(index, 1);
		$scope.saveLocalStorage();
	}
}]);